import React from 'react';
import { List } from './Contacts.styled';
import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';

export const Contacts = ({ contacts, filter, deleteContact }) => {
  return (
    <>
      <List>
        {contacts.map(contact => {
          return (
            contact.name.toLowerCase().includes(filter.toLowerCase()) && (
              <Contact
                deleteContact={deleteContact}
                name={contact.name}
                number={contact.number}
                id={contact.id}
                key={contact.id}
              />
            )
          );
        })}
      </List>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
