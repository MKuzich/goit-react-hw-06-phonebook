import React from 'react';
import { Button, Item } from './Contact.styled';
import PropTypes from 'prop-types';

export const Contact = ({ deleteContact, name, number, id }) => {
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
  deleteContact: PropTypes.func.isRequired,
};
