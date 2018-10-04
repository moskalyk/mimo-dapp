import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postProfile, cancelUpdateProfile } from '../../actions/profileActions'

class ProfileForm extends Component {

  state = {
    bio: this.props.bio || ''
  };

  handlebioChange = e => {
    this.updateBio(e.target.value);
  };

  updateBio = newbio => {
    this.setState({ bio: newbio });
  }

  handleSubmit = () => {
    this.props.postProfile(this.state.bio);
  };

  handleCancel = () => {
    this.props.cancelUpdateProfile();
  };

  render() {
    return (
      <div className="container login-container">
        <div className="columns is-centered">
          <div className="box login-box">
            <article className="media">
              <div className="content has-text-centered is-expanded">
                
                <div className='field'>
                  <label>Bio</label>
                  <input
                    className="input"
                    type='text'
                    value={this.state.bio}
                    onChange={this.handlebioChange}
                  />
                </div>

                <button
                  className='button'
                  onClick={this.handleSubmit}>
                  Update
                </button>

                <button
                  className='button'
                  onClick={this.handleCancel}>
                  Cancel
                </button>

              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    profileBio: state.profileReducer.profileBio
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cancelUpdateProfile: () => dispatch(cancelUpdateProfile()),
    postProfile: (bio) => dispatch(postProfile(bio))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);