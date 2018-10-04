import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProfileForm from './ProfileForm';

// TODO: fix mimo error
// const Mimo = require('ethmimo');
// const IPFS = require('ipfs');
// const ipfs = new IPFS();

class Profile extends Component {
	componentDidMount() {

	}
	render() {
		return (
			<div>
				<div className="container profile-container">
	            	<div className="columns is-centered">
		            	<div className="box">

			                <article className="media">
			                  <div className="content has-text-centered is-expanded">

								<h2><strong>{this.props.name}</strong></h2>

								<figure className="image is-128x128">
								  	<img className="is-rounded" src={this.props.image}></img> 
								</figure>

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
  bio: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string
};

//TODO: Remove after Mimo Connection
Profile.defaultProps = {
	containsImage: true,
	image: "http://content.invisioncic.com/Mnhlcanucks/profile/photo-thumb-60611.jpg",
};

export default Profile;
