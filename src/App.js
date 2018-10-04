import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { fetchWeb3 } from './actions/web3Actions';

import Search from './components/search/Search';
import MetaMaskError from './components/errors/MetaMaskError';

class App extends Component {

  componentDidMount = async () => {
    this.props.fetchWeb3(); // TODO: Create Global Container
  }

  render() {
    if(this.props.web3 === null)
      return (<MetaMaskError />);
    
    return (
      <div className="App">
        <h1 className="App-title">Mimo</h1>
        <Search />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeb3: () => dispatch(fetchWeb3()),
  }
}


export default connect(() => {}, mapDispatchToProps)(App);