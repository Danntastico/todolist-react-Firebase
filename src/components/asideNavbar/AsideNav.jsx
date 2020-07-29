import React from 'react';
import { IntlProvider, FormattedDate } from 'react-intl';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/actions/auth';

export const AsideNav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div className='tasks__aside'>
      <div className='aside__row'>
        <div className='description'>
          <h1>Tareas</h1>
          <p>(3 asignadas)</p>
        </div>
        <button className='addTask btn'>
          <i className='fas fa-plus'></i>
          Agregar tarea
        </button>
      </div>
      <div className='aside__row'>
        <div className='row__content'>
          <h2>To do list</h2>
          <p>
            <IntlProvider locale='es' defaultLocale='en'>
              <FormattedDate
                value={new Date()}
                month='long'
                day='2-digit'
                weekday='long'
              />
            </IntlProvider>
          </p>
        </div>
        <div className='profile__menu pointer'>
          <img
            src='assets/profilepic.jpg'
            alt='profile_picture'
            className='profilePicture'
          />
          <div className='profile__opts'>
            <div className='opts__item pointer' onClick={handleLogout}>
              <i class='fas fa-sign-out-alt'></i>
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
