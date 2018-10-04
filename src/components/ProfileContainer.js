import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Search from './search/Search.js';
import Profile from './profile/Profile.js';
import ProfileForm from './profile/ProfileForm.js';
import SearchError from './errors/SearchError';

// Actions Creators
import { fetchWeb3 } from '../actions/web3Actions';
import { updateProfile, cancelUpdateProfile, fetchProfile } from '../actions/profileActions'


class ProfileContainer extends Component {


  componentDidMount() {
    this.props.fetchWeb3(); // TODO: Create Global Container
    this.props.fetchProfile(this.props.match.params.ens);
  }

  handleUpdateClick = () => {
    this.openBioForm();
  }

  openBioForm = () => {
    this.props.updateProfile();
  }

  render() {
    return (
      <div> 
        {
          this.props.profileIsUpdating
          ? 
          <ProfileForm
            bio={this.props.profileBio} 
            onBioSubmit={this.onBioSubmit}
            web3={this.props.web3}
          >
          </ProfileForm>
          :
          <div>
            <Search />
          {/*Loader*/}
            {
              this.props.profileIsLoading 
              ? 
              <div className="content has-text-centered is-expanded"> 
                <div className="loader"></div> 
              </div> 
              : 
                // If the Loader is finished
                <div> 
                {
                  this.props.profileNotFound 
                ? 
                  <SearchError /> 
                :
                  <div>
                    <Profile
                      name={this.props.profileName} 
                      bio={this.props.profileBio} 
                      photo={this.props.profilePhoto} 
                      >
                    </Profile>

                    <div className="content has-text-centered is-expanded">
                    {
                    this.props.profileCanBeUpdated === true && this.props.profileIsUpdating === false
                    && <button className="button is-primary" onClick={this.handleUpdateClick}>Update</button>
                    }
                    </div>
                  </div>
                }
              </div>
            }

            {
              
            }
          </div>
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

const mapStateToProps = (state) => {
  return {
    profileIsUpdating: state.profileReducer.profileIsUpdating,
    profileNotFound: state.profileReducer.profileNotFound,
    profileIsLoading: state.profileReducer.profileIsLoading,
    profileCanBeUpdated: state.profileReducer.profileCanBeUpdated,
    profileName: state.profileReducer.profileName,
    profileBio: state.profileReducer.profileBio,
    profilePhoto: state.profileReducer.profileBio
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: (name) => dispatch(fetchProfile(name)),
    cancelUpdateProfile: () => dispatch(cancelUpdateProfile()),
    updateProfile: (bio) => dispatch(updateProfile(bio)),
    fetchWeb3: () => dispatch(fetchWeb3())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

