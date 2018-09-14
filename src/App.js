import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import ProfileContainer from './components/ProfileContainer';
import Login from './components/login/Login';

import getWeb3 from './utils/getWeb3'
import getAccounts from './utils/getAccounts'

import {
  Link
} from 'react-router-dom';

class App extends Component {

  state = {
    ensDomain: '',
    mulitHash: null,
    web3: null,
    account: null,
    isLoggedIn: false
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
  handleLogin = (ensDomain) => {
    this.login(ensDomain);
  }

  login = (ensDomain) => {
    this.setState({ 
      ensDomain: ensDomain,
      isLoggedIn: true
    });
  }

  getMultiHash = () => {

    // Get multihash
    console.log()

    // If no Multi hash, create db within Ethmimo ()
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Experiences, Not Services</h1>
          {! this.state.isLoggedIn ? 
            <Login 
            onLoginVerified={this.handleLogin}
            web3={this.state.web3}
            ></Login> 
            : 
            <ProfileContainer 
              ensDomain={this.state.ensDomain}
              web3={this.state.web3}
            ></ProfileContainer> 
          }
        <Footer/>
      </div>
    );
  }
}

export default App;