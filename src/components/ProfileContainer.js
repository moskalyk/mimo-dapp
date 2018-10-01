import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Search from './search/Search.js';
import Profile from './profile/Profile.js';
import ProfileForm from './profile/ProfileForm.js';

class ProfileContainer extends Component {

  state = {
    updating: false,
    bio: null
  }

  componentDidMount() {
    
    const id = this.props.match.params.ens;
    console.log(id);

    console.log(this.props.canUpdateProfile);
    this.setState({bio: "my bio"});
  }

  async signMsg(from, msg) {
    const result = await this.props.web3.eth.sign(from, msg);
    console.log(result);
    return result;
  }

  handleUpdateClick = () => {
    console.log('Toggling Update');
    this.openBioForm();
  }

  updateBio = (bio) => {
    this.setState({bio: bio});
  }

  async onBioSubmit(payload) {
    console.log(payload);
    console.log(this.props.account)
    // await this.signMsg(this.props.account, this.props.web3.utils.sha3("Updating Bio"));
    this.updateBio(payload.bio)
    this.closeBioForm();
  }

  onFormClose = () => {
    this.closeBioForm();
  }

  openBioForm = () => {
    this.setState({ updating: true })
  }

  closeBioForm = () => {
    this.setState({ updating: false })
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
        <div>
          <Search 
            onLoginVerified={this.props.onLoginVerified}
            web3={this.state.web3}>
          </Search> 
          <Profile
            ensDomain={this.props.ensDomain} 
            canUpdateProfile={this.props.canUpdateProfile}
            bio={this.state.bio} 
            photo={this.state.photo} 
            >
          </Profile>
        </div>
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

