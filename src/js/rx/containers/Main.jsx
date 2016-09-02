import React from 'react';
import { connect } from 'react-redux';

import { closeAlert } from '../actions/alert.js';
import { closeDisclaimer } from '../actions/disclaimer.js';
import { loadData } from '../actions/prescriptions.js';

import AlertBox from '../components/AlertBox';
import TabNav from '../components/TabNav';
import Disclaimer from '../components/Disclaimer';

class Main extends React.Component {
  componentWillMount() {
    this.props.loadData();
  }
  render() {
    let alertBox;

    if (this.props.alert.visible) {
      alertBox = (
        <AlertBox
            content={this.props.alert.content}
            isVisible={this.props.alert.visible}
            onCloseAlert={this.props.closeAlert}
            status={this.props.alert.status}/>
      );
    }

    return (
      <div>
        <Disclaimer
            isVisible={this.props.disclaimer.visible}
            handleClose={this.props.closeDisclaimer}/>
        <div className="rx-app row">
          {alertBox}
          <h1>Mail Order Prescriptions</h1>
          <TabNav/>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  closeAlert,
  closeDisclaimer,
  loadData
})(Main);