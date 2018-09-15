import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Profile from './profile/Profile.js';
import ProfileForm from './profile/ProfileForm.js';

class ProfileContainer extends Component {
  state ={
    updating: false,
    bio: null
  }

  componentDidMount() {
    console.log(this.props.canUpdateProfile);
    this.setState({bio: "my bio"});
  }

  handleUpdateClick = () => {
    console.log('Toggling Update')
    this.openBioForm();
  }

  updateBio = (bio) => {
    this.setState({bio: bio});
  }

  onBioSubmit = (payload) => {
    console.log(payload);
    this.updateBio(payload.bio)
    this.closeBioForm();
  }

  onFormClose = () => {
    this.closeBioForm();
  }

  openBioForm = () => {
    this.setState({updating: true })
  }

  closeBioForm = () => {
    this.setState({updating: false })
  }

  render() {
    return (
      <div> 

      {
        this.state.updating ? 
        <ProfileForm
          bio={this.state.bio} 
          onBioSubmit={this.onBioSubmit}
          onFormClose={this.onFormClose}
          web3={this.props.web3}
        >
        </ProfileForm>
        :
        <Profile
          ensDomain={this.props.ensDomain} 
          canUpdateProfile={this.props.canUpdateProfile}
          bio={this.state.bio} 
          photo={this.state.photo} 
          follower={this.state.followers}>
        </Profile>
      }

      {/*If can Update*/}
      {
        this.props.canUpdateProfile === true && this.state.updating === false
        && <button className="button is-primary" onClick={this.handleUpdateClick}>Update</button>
      }
      </div>
    );
  }
}

ProfileContainer.propTypes = {
  canUpdateProfile: PropTypes.bool,
  web3: PropTypes.object,
  ensDomain: PropTypes.string
};

export default ProfileContainer;

