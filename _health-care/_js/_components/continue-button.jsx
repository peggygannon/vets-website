import React from 'react';
import _ from 'lodash';

class ContinueButton extends React.Component {
  // constructor() {
  //   super();
  //   this.state = { hasError: false };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  componentWillMount() {
    this.id = _.uniqueId('date-input-');
  }

  render() {
    return (
      <div className="row progress-buttons">
        <div className="small-8 columns">
          <button id="continueButton" className="usa-button-primary">Continue</button>
        </div>
      </div>
    );
  }
}

export default ContinueButton;