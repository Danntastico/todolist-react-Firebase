import React, { useRef, useEffect } from 'react';

export const ModalContainer = ({ children, modalIsOpen }) => {
  const myModal = useRef(false);

  useEffect(() => {
    if (modalIsOpen) {
      myModal.current.style.display = 'block';
    } else {
      myModal.current.style.display = 'none';
    }
  }, [modalIsOpen]);

  return (
    <div ref={myModal} className='modal'>
      <div className='modal__content'>{children}</div>
    </div>
  );
};
