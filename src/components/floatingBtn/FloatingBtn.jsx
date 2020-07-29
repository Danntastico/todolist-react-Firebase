import React from 'react';
import { useDispatch } from 'react-redux';
import { startNewNote } from '../../store/actions/todos';

export const FloatingBtn = () => {
  const dispatch = useDispatch();
  const handleAddNew = () => {
    dispatch(startNewNote());
  };
  return (
    <button className='floatingBtn btn' onClick={handleAddNew}>
      <i className='fas fa-plus'></i>
    </button>
  );
};
