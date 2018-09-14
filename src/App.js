import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import { connect } from 'react-redux';
import { registerProfileAction } from './actions/actions';


import {
  Link
} from 'react-router-dom';

class App extends Component {
  onRegister = () => {
    console.log('registering!');
    this.props.handleRegisterProfile();
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        
        <h1 className="App-title">Welcome to Mimo</h1>
        <p className="App-intro">
          Check out Fire profiles
          <br></br>
          <Link to='/profile'>
              <button className="button">Profiles</button>
          </Link>

          <br></br>

          {/*TODO: Create Component*/}
          {/*Register Profile*/}
          <div>
            <input className="input is-primary is-rounded" type="text" placeholder="Primary input"></input>
            <button onClick={this.onRegister} className="button is-primary">Register</button>
          </div>

        </p>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return ({
    handleRegisterProfile: () => {
      dispatch(registerProfileAction())
    }
  })
}


const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;