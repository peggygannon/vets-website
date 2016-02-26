import React from 'react';

/**
 * A component for the continue button to navigate through the sections of questions.
 */
class ContinueButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onButtonClick();
  }

  render() {
    return (
      <div className="row progress-buttons">
        <div className="small-8 columns">
          <button
              className="usa-button-primary"
              id="continueButton"
              onClick={this.handleClick}>Continue</button>
        </div>
      </div>
    );
  }
}

export default ContinueButton;
