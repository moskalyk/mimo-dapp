import React, { Component } from 'react';

import Profile from './profile/Profile.js';
import Timeline from './timeline/Timeline.js';

import { connect } from 'react-redux';

import { followProfileAction } from '../actions/actions';

class ProfileContainer extends Component {

  state = {
    name: null,
  }

  componentDidMount() {
    // Open Profile
    console.log("Load our profile...");

    // TODO: Get History
    this.setState({
      name: "Gillz",
    });

  }

  handleFollow = () => {
    this.props.handleFollowProfile()
    console.log('Follow!')
  }

  render() {
    // Hack until we switch to redux
    const timeline = [{
      id: 1,
      date: 'Today',
      details: "Howdie"
    }, {
      id: 2,
      date: 'Yesterday',
      details: "Ho"
    }]

    return (
      // TODO: Style components
      <div> 
        {/*Logic to check it has loaded profile from Mimo store?*/}
        {/*Async load history?*/}

        {/*Include Navbar*/}

        <Profile name={this.state.name} onFollow={this.handleFollow}></Profile>
        <Timeline timeline={timeline} ></Timeline>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return ({
    handleFollowProfile: () => {
      dispatch(followProfileAction())
    }
  })
}


const ProfileReduxContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

export default ProfileReduxContainer;
