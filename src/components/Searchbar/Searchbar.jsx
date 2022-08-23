import React from 'react';
import { Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchForm, Header, Button, Input } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const initialValues = { input: '' };

  const onHandlerFormSubmit = async (values, actions) => {
    if (values.input.trim() === '') {
      toast.error('Enter the name of the image, please!');
      return;
    }
    await onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onHandlerFormSubmit}>
      <Header>
        <SearchForm>
          <Button type="submit">
            <BsSearch />
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
