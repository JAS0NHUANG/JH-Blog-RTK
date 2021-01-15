import React from 'react';
import { 
	HashRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';

const SiteRouter = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
			<Footer />
		</Router>
	)
}

export default SiteRouter;
