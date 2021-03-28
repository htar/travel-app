import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import AuthService from '../services/AuthService'
import {User} from '../Interface/User'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {Notification} from '../components/Notification'
import {useFormik} from 'formik'
import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('username is required'),
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string()
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
	confirmPassword: yup
		.string()
		.required('Confirm your password')
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export default function SignUpPage() {
	const [alert, setAlert] = useState({
		open: false,
		status: 'success',
		message: 'Go login!',
	})
	const classes = useStyles()
	let history = useHistory()

	const formik = useFormik({
		initialValues: {
			email: '',
			username: '',
			confirmPassword: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values: User) => {
			AuthService.register(values, (status: string): void => {
				let option = {open: true, status: 'success', message: 'Go login!'}
				if (status !== 'success') {
					option = Object.assign(option, {status, message: 'Something wrong'})
				}
				setAlert(option)
				if (status === 'success') {
					setTimeout(() => {
						history.push('/auth')
					}, 3000)
				}
			})
		},
	})

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} onSubmit={formik.handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="username"
								label="User Name"
								name="username"
								autoComplete="username"
								value={formik.values.username}
								onChange={formik.handleChange}
								error={
									formik.touched.username && Boolean(formik.errors.username)
								}
								helperText={formik.touched.username && formik.errors.username}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								onChange={formik.handleChange}
								label="Email Address"
								name="email"
								autoComplete="email"
								value={formik.values.email}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								value={formik.values.password}
								onChange={formik.handleChange}
								error={
									formik.touched.password && Boolean(formik.errors.password)
								}
								helperText={formik.touched.password && formik.errors.password}
								autoComplete="current-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="confirmPassword"
								label="Password"
								type="password"
								id="confirmPassword"
								value={formik.values.confirmPassword}
								onChange={formik.handleChange}
								error={
									formik.touched.confirmPassword &&
									Boolean(formik.errors.confirmPassword)
								}
								helperText={
									formik.touched.confirmPassword &&
									formik.errors.confirmPassword
								}
								autoComplete="current-password"
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign Up
					</Button>
					<Grid container justify="center">
						<Grid item>
							<Link to={`/auth`}>Already have an account? Sign in</Link>
						</Grid>
					</Grid>
				</form>
				{alert.open && (
					<Notification
						open={alert.open}
						status={alert.status}
						message={alert.message}
					/>
				)}
			</div>
		</Container>
	)
}
