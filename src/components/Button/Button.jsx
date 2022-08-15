import React from 'react';
import { LoadButton } from './Buttton.styled';

export const Button = ({ onClick }) => {
  // console.log(props);
  return (
    <LoadButton onClick={onClick} ktype="button">
      Load more
    </LoadButton>
  );
};
