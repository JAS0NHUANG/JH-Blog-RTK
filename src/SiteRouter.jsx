import React from 'react';
import { 
	HashRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import Home from './pages/Home';
import SinglePost from './pages/SinglePost';

import Header from './components/Header';
import Footer from './components/Footer';

const SiteRouter = () => {
	return (
		<Router>
			<Header />
			<main>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/post/:id'>
						<SinglePost />
					</Route>
				</Switch>
			</main>
			<Footer />
		</Router>
	)
}

export default SiteRouter;
