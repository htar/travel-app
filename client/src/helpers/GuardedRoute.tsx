import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthService from '../services/AuthService'

type PrivateRouteProps = {
	path: string;
	component: React.ElementType;
}
const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
	component: Component,
	...routeProps
}) => {
	const isAuth = AuthService.isAuthenticated()
	return (
		<Route
			{...routeProps}
			render={() => (isAuth ? <Component /> : <Redirect to="/auth" />)}
		/>
	)
}

export default PrivateRoute
