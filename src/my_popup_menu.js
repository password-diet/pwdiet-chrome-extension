import React from 'react';
import dwGen from 'diceware-password-generator';

class PasswordDiet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'passphrase': "Click the button below",};
  }

  generatePassword() {
    let copyDiv = document.getElementById("passphrase");
    let success = document.getElementById("copy-success");
    success.innerHTML = '';
    let passphrase = dwGen();

    copyDiv.innerHTML = passphrase;
    this.setState({
      'passphrase': passphrase,
    });
    copyDiv.focus();
    document.execCommand("SelectAll");
    document.execCommand("Copy",!1,null);
    document.execCommand("Unselect");
    success.innerHTML = '✓ passphrase copied to clipboard';
  }

  render() {
    return(
    	<div className="text-center">
    		<p className="flow-text" id='passphrase'>{this.state.passphrase}</p>
        <p id="copy-success"></p>
    		<a className="waves-effect waves-light btn" onClick={this.generatePassword.bind(this)}><i className="material-icons left"></i>Generate & copy</a>
    	</div>
    	);
  }
}

React.render(
  <PasswordDiet />,
  document.getElementById('app')
);


