import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logoutRequest } from "../actions"
import classNames from 'classnames';

// styles
import '../assets/styles/components/Header.scss'

import platziLogo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import gravatar from '../utils/gravatar';

const Header = props => {
	const { user, isLogin  } = props;
	const hasUser = Object.keys(user).length > 0

	const headerStyle = classNames('header', {
		isLogin,
	})

	const handleLogout = () => {
		props.logoutRequest({});
	}

	return <header className={headerStyle}>
		<Link to="/">
			<img className="header__img" src={platziLogo} alt="Platzi Video" />
		</Link>
		<div className="header__menu">
		<div className="header__menu--profile">
			{ hasUser ?
				<img src={gravatar(user.email)} alt={`imagen de perfil de ${user.email}`} />
			:
				<img src={userIcon} alt="" />
			}
		</div>
		<ul>
			<li><Link to="/">Cuenta</Link></li>
			{ hasUser ? 				
				<li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
				:
				<li><Link to="/login">Iniciar Sesión</Link></li>
			}
		</ul>
		</div>
	</header>
};

const matchStateToProps = state => {
	return {
		user: state.user
	}
}

const mapDispatchToProps = {
	logoutRequest,
}


export default connect(matchStateToProps, mapDispatchToProps)(Header)