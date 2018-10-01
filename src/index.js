import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import ProfileContainer from './components/ProfileContainer.js';
import registerServiceWorker from './registerServiceWorker';

// React Router
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

ReactDOM.render(
		<Router>
			<Switch>
				{/* Our Routes*/}
				<Route exact path="/" component={App}/>
				<Route exact path="/profile/:ens" component={ ProfileContainer } />
			</Switch>
		</Router>
	, document.getElementById('root')
	);

registerServiceWorker();
