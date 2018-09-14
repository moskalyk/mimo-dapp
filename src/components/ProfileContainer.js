import React, { Component } from 'react';

import Profile from './profile/Profile.js';
import Timeline from './timeline/Timeline.js';

class ProfileContainer extends Component {

  state = {
    name: null,
  }

  componentDidMount() {
    // Open Profile
    console.log("Load our profile...");
    console.log(this.props)
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
        <Profile ensDomain={this.props.ensDomain} onFollow={this.handleFollow}></Profile>
        <Timeline timeline={timeline} ></Timeline>
      </div>
    );
  }
}

export default ProfileContainer;
