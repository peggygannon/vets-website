import React from 'react';
import { connect } from 'react-redux';

import ConfirmRefillModal from '../components/ConfirmRefillModal';
import GlossaryModal from '../components/GlossaryModal';

import { openAlert } from '../actions/alert.js';
import { openRefillModal, closeRefillModal, openGlossaryModal, closeGlossaryModal } from '../actions/modal.js';

class RxRefillsApp extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <ConfirmRefillModal
            isVisible={this.props.modal.refill.visible}
            drug="Acetaminophen"
            dosage="250mg"
            lastRefilled="06/07/2016"
            openAlert={this.props.openAlert}
            onCloseModal={this.props.closeRefillModal}/>
        <GlossaryModal
            content={this.props.modal.glossary.content}
            isVisible={this.props.modal.glossary.visible}
            onCloseModal={this.props.closeGlossaryModal}/>
      </div>
    );
  }
}

RxRefillsApp.propTypes = {
  children: React.PropTypes.element
};

// TODO: fill this out
const mapStateToProps = (state) => {
  return state;
};

export default connect(
  mapStateToProps, {
    openAlert,
    openRefillModal,
    closeRefillModal,
    openGlossaryModal,
    closeGlossaryModal
  })(RxRefillsApp);