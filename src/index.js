import React from 'react';
import ReactDOM from 'react-dom';

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
		<Router>
			<Switch>
					{/* Our Routes*/}
				<Route exact path="/" component={AppContainer}/>
			</Switch>
		</Router>
	, document.getElementById('root'));

registerServiceWorker();
