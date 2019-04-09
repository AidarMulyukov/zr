import React from 'react';
import './styles.css';
class AgeVerificationButton extends React.Component {
  render(props){
    return (
        <button type="button" className="ageVerificationButton" onClick={this.props.function}>{this.props.title}</button>
    )
  }
}

export default AgeVerificationButton;
