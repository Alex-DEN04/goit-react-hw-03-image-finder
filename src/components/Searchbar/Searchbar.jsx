import React from 'react';
import { Formik } from 'formik';

import {
  SearchForm,
  Header,
  Button,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const initialValues = { input: '' };

  const onHandlerFormSubmit = async (values, actions) => {
    await onSubmit(values);
    // console.log(values);
    // console.log(actions);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onHandlerFormSubmit}>
      <Header>
        <SearchForm>
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            type="text"
            name="input"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    </Formik>
  );
};

export default Searchbar;
