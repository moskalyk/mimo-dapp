import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './stores/store.js';

import './index.css';

//TODO: Convert to app container
import AppContainer from './App';
import ProfileContainer from './components/ProfileContainer';
import registerServiceWorker from './registerServiceWorker';

// React Router
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
					{/* Our Routes*/}
				<Route exact path="/" component={AppContainer}/>
				<Route exact path="/profile" component={ProfileContainer}/>
			</Switch>
		</Router>
	</Provider>
	, document.getElementById('root'));

registerServiceWorker();
