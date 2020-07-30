import React from 'react';
import { IntlProvider, FormattedDate } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/actions/auth';
import { openModal } from '../../store/actions/ui';
import { DescriptionStatus } from '../taskEntries/DescriptionStatus';
import { gravatar } from '../../utils/gravatar';

export const AsideNav = ({ handleClick }) => {
  const { photoURL, email } = useSelector((state) => state.auth);
  const { activeTodos, totalTodos, finishedTodos } = useSelector(
    (state) => state.tasks
  );
  const imgsrc = photoURL ? photoURL : gravatar(email);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className='tasks__aside'>
      <div className='aside__row'>
        <div className='description'>
          <h1>Tareas</h1>
          <DescriptionStatus
            icon='fas fa-globe'
            amount={totalTodos}
            label='en total.'
            color='--total'
          />
          <DescriptionStatus
            icon='fas fa-snowboarding'
            amount={activeTodos}
            label='activas.'
            color='--active'
          />
          <DescriptionStatus
            icon='fas fa-clipboard-check'
            amount={finishedTodos}
            label='finalizadas.'
            color='--finished'
          />
        </div>
        <button className='addTask btn pointer' onClick={handleClick}>
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
          <img src={imgsrc} alt='profile_picture' className='profilePicture' />
          <div className='profile__opts'>
            <div className='opts__item pointer' onClick={handleLogout}>
              <i className='fas fa-sign-out-alt'></i>
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
