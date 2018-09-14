import React, { Component } from 'react';

// const Mimo = require('ethmimo');
//
const IPFS = require('ipfs');
const ipfs = new IPFS();

class Profile extends Component {

	state = {
		mimo: null
	}

	componentDidMount() {
		// Set up Mimo
		
		const mimo = new Mimo(this.props.web3, ipfs);
		// this.setState({mimo: mimo})
	}

  getHistory = async () => {
  	// Get all data published to a user's DB
	// await this.state.mimo.getHistory(this.props.ensDomain).then(logs => console.log(logs));
  }

  render() {

  	this.getHistory();

	  return (
	    <div>
	    	<h1 className="title">
				Mimo Timeline
			</h1>
			<h2 className="subtitle">
				This is {this.props.ensDomain}'s bio
				{/*History {history}*/}
			</h2>
	    </div>
	  );
	}
}


export default Profile;
