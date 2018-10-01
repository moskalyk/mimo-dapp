import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom'


class Search extends Component {

  state = {
  	ensDomain: ''
  }

  // Handle Change
  handleChange = e => {
    this.setState({ 
      ensDomain: e.target.value 
    });
  }
  
  // Handle Logging in
  handleSearchSubmit = () => {
    // TODO: some conditional logic to check 
    this.search(this.state.ensDomain);
  }

  search = ens => {
    if(this.isValidENS(ens)) {
    	// get MultiHash from web3.ens
    	const multiHash = "Qsdfsdfsdf"
    	this.props.onLoginVerified(ens, multiHash);

    } else {
      // TODO: Perform some validation UI here
      alert('Not an ENS Domain')
    }
  }

  isValidENS = ens => {
    console.log("Checking ENS:", ens);

    //TODO: Connect to web3
    // return await web3.eth.ens.getAddress('ethereum.eth').then((address) => {
    //   console.log(address);
    //   return web3.utils.isAddress(address)
    // })

    return ens.substr(ens.length - 4) === '.eth';

  }

	render() {
		return (
			<div>
        <div className="container login-container">
            <div className="columns is-centered">
              <div className="box login-box">
                <article className="media">
                  <div className="content has-text-centered is-expanded">

                    {/*TODO: Wrap / remove styling^?*/}
                    <input className="input is-primary" type="text" placeholder="Input" value={this.state.ensDomain} onChange={this.handleChange}></input>
                    <br></br>
                    <br></br>

                    <button onClick={this.handleSearchSubmit} className="button is-primary mimo-button">Search</button>

                  </div>
                </article>
              </div>
            </div>
        </div>
			</div>
		);
	}
}

Search.propTypes = {
  onLoginVerified: PropTypes.func,
  web3: PropTypes.object
};

export default Search;
