import React from 'react';
import { useDispatch } from 'react-redux';
import { startNewNote } from '../../store/actions/todos';

export const FloatingBtn = ({ handleClick }) => {
  const dispatch = useDispatch();
  const handleAddNew = () => {
    dispatch(startNewNote());
  };
  return (
    <button className='floatingBtn btn pointer' onClick={handleClick}>
      <i className='fas fa-plus'></i>
    </button>
  );
};
