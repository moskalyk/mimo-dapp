import React, { Component } from 'react';
import './App.css';
import ProfileContainer from './components/ProfileContainer';
import Search from './components/search/Search';

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
    canUpdateProfile: false,
    loadingMessage: null
  }

  componentDidMount = async () => {
    // Load Web3
    try{
      const web3 = await getWeb3();
      console.log(web3)
      const accounts = await getAccounts(web3);
      console.log(accounts);

      this.setState({
        web3: web3,
        account: accounts[0]
      });

    } catch(e) {
      this.setState({loadingMessage: "Failed to load web3, accounts, or contract. Check console for details."})
      console.log(e)
    }
  }

  // Logging in
  handleSearch = (ensDomain, address) => {

    // Check login
    this.login(ensDomain, address);
  }


  login = (ensDomain, address) => {

    this.getMultiHash();
    this.checkProfileCanUpdateState(this.state.account);
    // this.checkProfileCanUpdateState();

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
    console.log("Checking address Address");

    //TODO: 
    if(address == this.state.account) this.setState({ canUpdateProfile: true });
    else this.setState({ canUpdateProfile: false });
  }

  render() {

    if(this.state.web3 === null || this.state.account == null) {
      return (<div>Install Metamask / Web3 or Unlock account and Refresh </div>);
    }

    return (
      <div className="App">
          {! this.state.isLoggedIn ?
            <div>
              <h1 className="App-title">Mimo</h1>
              <Search 
                onLoginVerified={this.handleSearch}
                web3={this.state.web3}>
              </Search> 
            </div>
            : 
            <ProfileContainer 
              onLoginVerified={this.handleSearch}
              ensDomain={this.state.ensDomain}
              web3={this.state.web3}
              canUpdateProfile={this.state.canUpdateProfile}
              web3={this.state.web3}
              account={this.state.account}
            ></ProfileContainer> 
          }
      </div>
    );
  }
}

export default App;