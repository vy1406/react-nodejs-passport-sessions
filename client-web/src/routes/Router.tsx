import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom';

const Router = () => {
	return (
		<BrowserRouter>
			<div>
				<ul>
					<li>
						<Link to="/login">login</Link>
					</li>
					<li>
						<Link to="/register">register</Link>
					</li>
					<li>
						<Link to="/api_calls">API calls</Link>
					</li>
				</ul>

				<hr />

				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/api_calls">
						<ApiCalls />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

function Login() {
	const loginVova = (e: any): void => {
		e.preventDefault();

		const user = { email: 'w@w', password: '1' };
		axios
			.post('http://localhost:3000/web/login', user, { withCredentials: true })
			.then(res => {
				console.log(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const logout = (e: any): void => {
		e.preventDefault();
		const user = { email: 'w@w', password: '1' };
		axios
			.post('http://localhost:3000/web/logout', user, { withCredentials: true })
			.then(res => {
				console.log(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<div>
			<button onClick={loginVova}>login with vova</button>
			<button onClick={logout}>logout vova</button>
		</div>
	);
}

function Register() {
	const onRegister = (e: any): void => {
		e.preventDefault();

		const user = { name: 'dima', email: 'soldurifi@yahoo.com', password: '123' };
		axios
			.post('http://localhost:3000/web/register', user, { withCredentials: true })
			.then(res => {
				console.log(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<div>
			<button onClick={onRegister}>register with soldurifi</button>
		</div>
	);
}

function ApiCalls() {
	const onPrivateApiCall = (e: any): void => {
		e.preventDefault();

		axios
			.get('http://localhost:3000/web/private', { withCredentials: true })
			.then(res => {
				console.log(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const onEverybodyApiCall = (e: any): void => {
		e.preventDefault();

		axios
			.get('http://localhost:3000/web/everybody')
			.then(res => {
				console.log(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const onNotAuthorizedApiCall = (e: any): void => {
		e.preventDefault();

		axios
			.get('http://localhost:3000/web/for_not_authorized', { withCredentials: true })
			.then(res => {
				console.log(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	};
	return (
		<div>
			<h2>PrivatePage</h2>
			<button onClick={onPrivateApiCall}>onPrivateApiCall</button>
			<button onClick={onEverybodyApiCall}>onEverybodyApiCall</button>
			<button onClick={onNotAuthorizedApiCall}>onNotAuthorizedApiCall</button>
		</div>
	);
}
export default Router;
