import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupRequest } from '../actions';

// Styles
import '../assets/styles/Register.scss'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Register = props => {
  const [ form, setForm ] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.signupRequest(form)
    props.history.push("/")
    // yei
  }

    return <div>
      <Header isLogin />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={handleInput}
            />
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
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
      <Footer />
    </div>
};

const mapDispatchToProps = {
  signupRequest,
}

export default connect(null, mapDispatchToProps)(Register)