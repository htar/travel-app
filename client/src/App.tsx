import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import AuthLayout from './containers/AuthLayout'
import SiteLayout from './containers/SiteLayout'
import {Cards} from './components/Cards'
import PrivateRoute from './helpers/GuardedRoute'
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/auth">
					<AuthLayout />
				</Route>
				<Route exact path="/">
					<SiteLayout />
				</Route>
				<Route render={() => <h1> 404 Not found</h1>} />
				<PrivateRoute path="/list" component={Cards}></PrivateRoute>
			</Switch>
		</Router>
	)
}

export default App
