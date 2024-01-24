import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page">
      <h2>Login</h2>
      <LoginInput login={onLogin} />
      <p className="register-info">
        Belum punya akun?
        {' '}
        <Link to="/register">Daftar di sini.</Link>
      </p>
    </section>
  );
}

export default LoginPage;
