import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileForm extends Component {

  state = {
    bio: this.props.bio || '',
    count: this.props.bio.length || 0
  };

  handlebioChange = e => {
    this.updateBio(e.target.value);
    this.updateCounter(e.target.value.length);
  };

  updateBio = newbio => {
    this.setState({ bio: newbio });
  }

  updateCounter = length => {
    this.setState({ count: length });
  }

  handleSubmit = () => {

    // TODO: Perform Web3 sign
    console.log('Handling Submit');

    this.props.onBioSubmit({
      bio: this.state.bio,
      sig: "0x..."
    });

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
                onClick={this.handleSubmit}
              >
                Update
              </button>
              <button
                className='button'
                onClick={this.props.onFormClose}
              >
                Cancel
              </button>
            </div>
            {/*TODO: Style this?*/}
            {this.state.count}/140
            </article>
          </div>
        </div>
      </div>
    );
  }

  //TODO: Include this as a component into Profile Container
  // render() {
  //   return (
  //     <div>
  //       <div className='field'>
  //         <label>Bio</label>
  //         <input
  //           className="input"
  //           type='text'
  //           value={this.state.bio}
  //           onChange={this.handlebioChange}
  //         />
  //       </div>

  //       <button
  //         className='button'
  //         onClick={this.handleSubmit}
  //       >
  //         Update
  //       </button>
  //       <button
  //         className='button'
  //         onClick={this.props.onFormClose}
  //       >
  //         Cancel
  //       </button>
  //       {/*TODO: Style this?*/}
  //       {this.state.count}/140
  //     </div>
  //   );
  // }
}

//TODO: PropTypes

export default ProfileForm;