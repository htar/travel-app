import React from 'react'
import {withRouter} from 'react-router-dom'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useRouteMatch,
} from 'react-router-dom'
import LoginPage from '../../pages/LoginPage'
import SignUpPage from '../../pages/SignUpPage'
import {Link} from 'react-router-dom'
import classes from './AuthLayout.module.scss'



const AuthLayout = () => {
	let {path} = useRouteMatch()
	return (
		<>
			<span className={classes.logo}>
				<Link className={classes.link} to={'/'}>
					TA
				</Link>
			</span>
			<Router>
				<Switch>
					<Route exact path={path}>
						<LoginPage />
					</Route>
					<Route path={`${path}/sign-up`}>
						<SignUpPage />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default withRouter(AuthLayout)
