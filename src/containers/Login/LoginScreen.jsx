import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useSelector, useDispatch } from 'react-redux';
import {
  startLoginEmailPassword,
  startGoogleLogin,
} from '../../store/actions/auth';

export const LoginScreen = () => {
  const { loading } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const [inputValues, handleInputChange] = useForm({
    email: 'admin@mail.com',
    password: '123456',
  });

  const { email, password } = inputValues;
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <div className='form__main'>
      <form action='login' className='form' onSubmit={handleLogin}>
        <h2 className='form__title'>Login</h2>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='e-mail'
          autoComplete='off'
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
        <button
          type='submit'
          className='btn form__btn pointer'
          disabled={loading}
        >
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
      </form>
    </div>
  );
};
