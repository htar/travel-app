import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import AuthLayout from './containers/AuthLayout'
import SiteLayout from './containers/SiteLayout'
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
			</Switch>
		</Router>
	)
}

export default App
