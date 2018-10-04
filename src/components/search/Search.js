import React, { Component } from 'react';
import SearchButtonRouter from './SearchButtonRouter.js';

class Search extends Component {

  state = {
  	name: ''
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  }
  
	render() {
		return (
			<div>
        <div className="container login-container">
            <div className="columns is-centered">
              <div className="box login-box">
                <article className="media">
                  <div className="content has-text-centered is-expanded">
                    <input className="input is-primary" type="text" placeholder="Input" value={this.state.name} onChange={this.handleChange}></input>
                    <br></br>
                    <br></br>
                    <SearchButtonRouter ens={this.state.name}></SearchButtonRouter>
                  </div>
                </article>
              </div>
            </div>
        </div>
			</div>
		);
	}
}

export default Search;
