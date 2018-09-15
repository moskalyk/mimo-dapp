import React, { Component } from 'react';
import './App.css';
import ProfileContainer from './components/ProfileContainer';
import Login from './components/login/Login';

import getWeb3 from './utils/getWeb3'
import getAccounts from './utils/getAccounts'

//TODO: Use linking vs. rendering?
// import {
//   Link
// } from 'react-router-dom';

class App extends Component {

  state = {
    ensDomain: '',
    mulitHash: null,
    web3: null,
    account: null,
    isLoggedIn: false,
    canUpdateProfile: false
  }

  componentDidMount = async () => {
    // Load Web3
    try{
      const web3 = await getWeb3()
      const accounts = await getAccounts(web3);

      this.setState({
        web3: web3,
        account: accounts[0]
      });

    }catch(e){
      this.setState({loadingMessage: "Failed to load web3, accounts, or contract. Check console for details."})
      console.log(e)
    }
  }

  // Logging in
  handleLogin = (ensDomain, address) => {
    this.login(ensDomain, address);
  }


  login = (ensDomain, address) => {

    this.getMultiHash();
    this.checkProfileCanUpdateState();

    this.setState({ 
      ensDomain: ensDomain,
      isLoggedIn: true
    });
  }

  getMultiHash = async () => {

    // Get multihash
    console.log("Getting MultiHash")

    // If no Multi hash, create db within Ethmimo ()
  }

  checkProfileCanUpdateState = (address) => {
    // Get multihash
    console.log("Checking address Address")
    //TODO: 
    // if(address == this.state.account) this.setState({ canUpdateProfile: true });
    this.setState({ canUpdateProfile: true });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Mimo</h1>
        <h2 className="App-sub-title">Experiences, Not Services</h2>
          {! this.state.isLoggedIn ? 
            <Login 
              onLoginVerified={this.handleLogin}
              web3={this.state.web3}>
            </Login> 
            : 
            <ProfileContainer 
              ensDomain={this.state.ensDomain}
              web3={this.state.web3}
              canUpdateProfile={this.state.canUpdateProfile}
            ></ProfileContainer> 
          }
      </div>
    );
  }
}

export default App;