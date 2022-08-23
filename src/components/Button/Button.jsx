import React from 'react';
import { LoadButton } from './Buttton.styled';

export const Button = ({ onClick }) => {
  return (
    <LoadButton onClick={onClick} type="button">
      Load more
    </LoadButton>
  );
};
