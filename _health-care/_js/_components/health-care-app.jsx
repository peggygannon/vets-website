import React from 'react';
import _ from 'lodash';
import lodashDeep from 'lodash-deep';

import IntroductionPanel from './introduction-panel.jsx';
import Nav from './nav.jsx';
import ContinueButton from './continue-button';

// Add deep object manipulation routines to lodash.
_.mixin(lodashDeep);

class HealthCareApp extends React.Component {
  constructor() {
    super();
    this.publishStateChange = this.publishStateChange.bind(this);
    let initialState = {
      applicationData: {
        introduction: {},

        personalInformation: {
          fullName: {
            first: 'William',
            middle: '',
            last: 'Shakespeare',
            suffix: '',
          },

          mothersMaidenName: 'Arden',

          socialSecurityNumber: '999-99-9999',

          dateOfBirth: {
            month: '1',
            day: '15',
            year: '1997',
          }
        }
      }
    };

    // Merge in saved data.
    // TODO(awong): If a field is ever removed in a new version of the code,
    // this will preserve the key. The result of JSON.parse() should first
    // be filtered to only contain keys also in this.state.applicationData.
    const savedDataJson = window.localStorage['health-app-data'];
    if (savedDataJson !== undefined) {
      const savedData = JSON.parse(savedDataJson);
      initialState = _.deepMapValues(
        initialState,
        (value, propertyPath) => {
          const savedValue = _.get(savedData, propertyPath);
          if (savedValue !== undefined) {
            return savedValue;
          }

          return value;
        });
    }

    this.state = initialState;
  }

  publishStateChange(propertyPath, update) {
    const newApplicationData = Object.assign({}, this.state.applicationData);
    _.set(newApplicationData, propertyPath, update);
    window.localStorage['health-app-data'] = JSON.stringify(newApplicationData);

    this.setState({ applicationData: newApplicationData });
  }

  render() {
    let children = this.props.children;

    if (children === null) {
      // This occurs if the root route is hit. Default to IntroductionPanel.
      children = (<IntroductionPanel
          applicationData={this.state.applicationData}
          publishStateChange={this.publishStateChange}/>);
    } else {
      // Pass the application state down to child components. The
      // cloneElement idiom is the standard react way to add
      // properties to a child. It doesn't actually new a bunch of objects
      // so it's fast.
      children = React.Children.map(children, (child) => {
        return React.cloneElement(child,
          { applicationData: this.state.applicationData,
            publishStateChange: this.publishStateChange });
      });
    }

    return (
      <div className="row">
        <div className="small-12 columns">
          <Nav/>
          <div className="progress-box">
            {children}
            <ContinueButton/>
          </div>
        </div>
      </div>
    );
  }
}

export default HealthCareApp;
