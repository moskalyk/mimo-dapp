import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// React Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// App & Components
import App from './App';
import ProfileContainer from './components/ProfileContainer.js';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index.js';

// React Router
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunk, 
		logger,
		)
	);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				{/* Our Routes*/}
				<Route exact path="/" component={App}/>
				<Route exact path="/profile/:ens" component={ ProfileContainer } />
			</Switch>
		</Router>
	</Provider>
	, document.getElementById('root')
	);

registerServiceWorker();
