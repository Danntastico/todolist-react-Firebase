import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useSelector } from 'react-redux';

export const LoginScreen = () => {
  const { loading } = useSelector((state) => state.ui);

  const [inputValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = inputValues;
  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleGoogleLogin = (params) => {};

  return (
    <div className='form__main'>
      <form action='addQuote' className='form' onSubmit={handleLogin}>
        <h2 className='form__title'>Login</h2>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='e-mail'
          value={email}
          onChange={handleInputChange}
        />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          value={password}
          onChange={handleInputChange}
        />
        <button type='submit' className='btn form__btn' disabled={loading}>
          Login
        </button>
        <div className='googleLogin pointer' onClick={handleGoogleLogin}>
          <div className='googleLogin__icon'>
            <i className='fab fa-google'></i>
          </div>
          <div>
            <h2 className='googleLogin__label'>Login with google</h2>
          </div>
        </div>
        <a href='register.html' className='link'>
          Create new Account
        </a>
      </form>
    </div>
  );
};
