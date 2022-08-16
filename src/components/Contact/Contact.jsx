import React from 'react';
import { Button, Item } from './Contact.styled';
import PropTypes from 'prop-types';
import { useContacts } from 'redux/contactsSlice';

export const Contact = ({ name, number, id }) => {
  const { remove, contacts, add } = useContacts();

  const deleteContact = e => {
    remove(e.target.id);
  };
  return (
    <Item>
      {name}: {number}
      <Button type="button" onClick={deleteContact} id={id}>
        Delete
      </Button>
    </Item>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
