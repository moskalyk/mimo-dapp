import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchProfile } from '../../actions/profileActions';

class Button extends Component {

	handleSearch = () => this.search();

	search = () => {
		this.props.fetchProfile(this.props.ens);
		this.props.history.push(`/profile/${this.props.ens}`)
	}

	render(){
		return (
			<button
			className="button is-primary mimo-button"
			onClick={this.handleSearch}>
			Search
			</button>)
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: (name) => dispatch(fetchProfile(name)),
  }
}

export default withRouter(connect(() => {}, mapDispatchToProps)(Button));
