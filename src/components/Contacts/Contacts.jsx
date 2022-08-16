import React from 'react';
import { List } from './Contacts.styled';
import { Contact } from '../Contact/Contact';
import { useContacts } from 'redux/contactsSlice';
import { useFilter } from 'redux/filterSlice';

export const Contacts = () => {
  const { contacts } = useContacts();
  const { filter } = useFilter();

  return (
    <>
      {/* <List>
        {contacts.map(contact => {
          return (
            contact.name.toLowerCase().includes(filter.toLowerCase()) && (
              <Contact
                name={contact.name}
                number={contact.number}
                id={contact.id}
                key={contact.id}
              />
            )
          );
        })}
      </List> */}
    </>
  );
};
