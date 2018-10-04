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

  // Logging in
  handleSearch = (ensDomain, address) => {

    // Check login
    this.search(ensDomain, address);
  }


  search = (ensDomain, address) => {

    this.getMultiHash();
    this.checkProfileCanUpdateState(this.state.account);

    this.setState({ 
      ensDomain: ensDomain,
      isLoggedIn: true
    });

  }

  render() {

    if(this.props.web3 === null)
      return <MetaMaskError />;
    
    return (
      <div className="App">
        <h1 className="App-title">Mimo</h1>
        <Search />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    web3: state.web3Reducer.web3
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeb3: () => dispatch(fetchWeb3()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);