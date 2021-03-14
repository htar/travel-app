import React from 'react'
import { withRouter } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import HomePage from '../../pages/HomePage'
import CountryDetails from '../../pages/CountryDetails'
import './SiteLayout.scss'

const SiteLayout = ()=> {
	let { path } = useRouteMatch();
	return (
		<main className="main">
			<Header></Header>
			<Router>
				<Switch>
					<Route exact path={path}>
						<HomePage />
					</Route>
					<Route path={`/country/:id`}>
						<CountryDetails />
					</Route>
				</Switch>
			</Router>
			<Footer githubLinks={['https://github.com/htar']}></Footer>
		</main>
	)
}

export default withRouter(SiteLayout);
