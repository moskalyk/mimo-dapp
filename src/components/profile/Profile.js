import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfileForm from './ProfileForm';

// TODO: fix mimo error
// const Mimo = require('ethmimo');
const IPFS = require('ipfs');
const ipfs = new IPFS();

class Profile extends Component {

	state = {
		mimo: null
	}

	componentDidMount() {
		// Set up Mimo
		// const mimo = new Mimo(this.props.web3, ipfs);
		// this.setState({mimo: mimo})
	}

	getHistory = async () => {
		console.log(this.props.multihash)
		// Get all data published to a user's DB
		// await this.state.mimo.getHistory(this.props.ensDomain).then(logs => console.log(logs));
	}

	render() {
		return (
			<div>
				<div className="container profile-container">
	            	<div className="columns is-centered">
		            	<div className="box">

			                <article className="media">
			                  <div className="content has-text-centered is-expanded">

								<h2><strong>{this.props.ensDomain}</strong></h2>

								<figure className="image is-128x128">
								  <img className="is-rounded" src={this.props.image}></img>
								</figure>

								<p><strong>Followers</strong> {this.props.follower} <strong>Following</strong> {this.props.following}</p>
								<p>Bio: {this.props.bio}</p>

			                  </div>
			                </article>
		            	</div>
		        	</div>
				</div>
			</div>
		);
	}
}

Profile.propTypes = {
  endDomain: PropTypes.string,
  image: PropTypes.string,
  follower: PropTypes.number,
  following: PropTypes.number
};

//TODO: Remove after Mimo Connection
Profile.defaultProps = {
  image: "http://content.invisioncic.com/Mnhlcanucks/profile/photo-thumb-60611.jpg",
  follower: 99,
  following: 1
};

export default Profile;
