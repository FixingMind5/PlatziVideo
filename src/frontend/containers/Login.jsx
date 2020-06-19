import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions'

// Styles
import '../assets/styles/Login.scss'

import googleIcon from "../assets/static/google-icon.png"
import twitterIcon from "../assets/static/twitter-icon.png"
import Header from '../components/Header';
import Footer from '../components/Footer'

const Login = (props) => {
	const [ form, setForm ] = useState({
		email: '',
	});

	const handleInput = event => {
		setForm({
			...form,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		props.loginRequest(form);
		props.history.push('/');
	};

	
	return <div>
		<Header isLogin />
		<section className="login" onSubmit={handleSubmit}>
			<section className="login__container">
			<h2>Inicia sesión</h2>
			<form className="login__container--form">
				<input
					name="email"
					className="input"
					type="text"
					placeholder="Correo"
					onChange={handleInput}
				/>
				<input 
					name="password"
					className="input"
					type="password"
					placeholder="Contraseña"
					onChange={handleInput}
				/>
				<button className="button">Iniciar sesión</button>
				<div className="login__container--remember-me">
				<label>
					<input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
				</label>
				<a href="/">Olvidé mi contraseña</a>
					</div>
			</form>
			<section className="login__container--social-media">
				<div><img src={googleIcon} /> Inicia sesión con Google</div>
				<div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
			</section>
			<p className="login__container--register">No tienes ninguna cuenta <Link to="/register">Regístrate</Link></p>
			</section>
		</section>
		<Footer />
	</div>
}

const matchDispathToProps = {
	loginRequest,
}

export default connect(null, matchDispathToProps)(Login)