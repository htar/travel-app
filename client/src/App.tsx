import React, {Suspense} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {Cards} from './components/Cards'
import PrivateRoute from './helpers/GuardedRoute'
const AuthLayout = React.lazy(() => import('./containers/AuthLayout'))
const SiteLayout = React.lazy(() => import('./containers/SiteLayout'))

function App() {

	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route path="/auth" component={AuthLayout}></Route>
					<Route exact path="/" component={SiteLayout}></Route>
					<Route render={() => <h1> 404 Not found</h1>} />
					<PrivateRoute path="/list" component={Cards}></PrivateRoute>
				</Switch>
			</Suspense>
		</Router>
	)
}

export default App
