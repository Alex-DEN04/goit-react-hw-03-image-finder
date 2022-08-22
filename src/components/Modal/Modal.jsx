import React from 'react';

import { ModalStyled, Overlay } from './Modal.styled';

export const Modal = ({ images }) => {
  // console.log(props);
  return (
    <Overlay>
      <ModalStyled>
        <img src={images.largeImageURL} alt="" />
      </ModalStyled>
    </Overlay>
  );
};
