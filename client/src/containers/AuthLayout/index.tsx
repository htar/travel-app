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
import Avatar from '@material-ui/core/Avatar'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(() => ({
	logo: {
		position: 'fixed',
		top: '20px',
		left: '20px',
		width: '60px',
		height: '60px',
		backgroundColor: '#3f51b5',
	},
	link: {
		color: '#fff',
	},
}))

const AuthLayout = () => {
	const classes = useStyles()
	let {path} = useRouteMatch()
	return (
		<main className="main">
			<Avatar className={classes.logo}>
				<Link className={classes.link} to={'/'}>
					TA
				</Link>
			</Avatar>
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
		</main>
	)
}

export default withRouter(AuthLayout)
