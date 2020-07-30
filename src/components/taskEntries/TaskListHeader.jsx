import React from 'react';
import { DescriptionStatus } from './DescriptionStatus';

export const TaskListHeader = ({ finished, total, active }) => {
  return (
    <div className='tasksList__header'>
      <h1 className='header__title'>Tareas</h1>
      <div className='header__content'>
        <DescriptionStatus
          icon='fas fa-globe'
          amount={total}
          label='en total.'
          color='--total'
        />
        <DescriptionStatus
          icon='fas fa-snowboarding'
          amount={active}
          label='activas.'
          color='--active'
        />
        <DescriptionStatus
          icon='fas fa-clipboard-check'
          amount={finished}
          label='finalizadas.'
          color='--finished'
        />
      </div>
    </div>
  );
};
