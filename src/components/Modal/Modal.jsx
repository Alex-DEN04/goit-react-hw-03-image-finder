import React from 'react';
import { createPortal } from 'react-dom';

import { ModalStyled, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ images }) => {
  // console.log(props);
  return createPortal(
    <Overlay>
      <ModalStyled>
        <img src={images.largeImageURL} alt="" />
      </ModalStyled>
    </Overlay>,
    modalRoot
  );
};
