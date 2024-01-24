import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };
  return (
    <section className="register-page">
      <h2>Register Page</h2>
      <RegisterInput register={onRegister} />
      <p className="login-info">
        Sudah punya akun?
        {' '}
        <Link to="/">Login di sini.</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
