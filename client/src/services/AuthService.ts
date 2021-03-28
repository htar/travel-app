import {User} from '../Interface/User'

const url = 'http://localhost:3030'
const option = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
}

const AuthService = {
	storageTokenKey: 'bearer',
	token: '',
	setToken(newToken: string): void {
		localStorage.setItem(this.storageTokenKey, newToken)
		this.token = newToken
	},

	getToken(): string | null {
		return localStorage.getItem(this.storageTokenKey) || ''
	},

	isAuthenticated() {
		return Boolean(this.getToken())
	},
	register(user: User, callback: Function) {
		return fetch(`${url}/api/auth/register`, {
			...option,
			body: JSON.stringify(user),
		})
			.then((res) => {
				if (!res.ok) {
					callback('error')
				} else {
					return res
				}
				return callback(res.ok ? 'success' : 'error')
			})
			.catch((err) => {
				console.log('register error', err)
				return callback('error')
			})
	},
	login(loginData: User, callback: Function) {
		fetch(`${url}/api/auth/login`, {
			...option,
			body: JSON.stringify(loginData),
		})
			.then((res) => {
				if (res.ok) return res
				callback('error')
			})
			.then((res: any) => res.json())
			.then((data = {token: ''}) => {
				const newToken: string = data.token

				this.setToken(newToken)
				callback('success')
			})
			.catch((err) => {
				console.log('login error', err)
				return callback('error')
			})
	},
	signout(cb: Function) {
		localStorage.clear()
		cb()
	},
}

export default AuthService
