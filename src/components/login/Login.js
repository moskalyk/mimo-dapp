import React, { Component } from 'react';


class Login extends Component {

  state = {
  	ensDomain: '',
  }

  // Handle Change
  handleChange = (event) => {
    this.setState({ ensDomain: event.target.value });
  }
  
  // Handle Logging in
  handleLoginSubmit = (event) => {
    // TODO: some conditional logic to check 
    this.login(this.state.ensDomain);
    event.preventDefault();
  }

  login = (ens) => {
    if(this.isValidENS(ens)) {
    	// get MultiHash from web3
    	const multiHash = "Qsdfsdfsdf"

    	this.props.onLoginVerified(ens, multiHash);
    } else {
      // Display message
      console.log('Not an ENS Domain')
      alert('Not an ENS Domain')
    }
  }

  isValidENS = (ens) => {
    console.log("Checking ENS:", ens);
    console.log(ens.substr(ens.length - 4))

    //TODO: add some web3 logic
    if(ens.substr(ens.length - 4) == '.eth'){
      return true;
    };

    return false;
  }

	render() {
		return (
			<div>
				<div>
					<input className="input is-primary custom-round" type="text" placeholder="Login" value={this.state.ensDomain} onChange={this.handleChange} ></input>
					<button onClick={this.handleLoginSubmit} className="button is-primary">Login</button>
				</div>
			</div>
		);
	}
}


export default Login;
