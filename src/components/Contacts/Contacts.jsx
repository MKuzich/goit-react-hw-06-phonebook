import React from 'react';
import { List } from './Contacts.styled';
import { Contact } from '../Contact/Contact';
import { useContacts } from 'redux/contactsSlice';

export const Contacts = () => {
  const { contacts, filter } = useContacts();

  return (
    <>
      <List>
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
      </List>
    </>
  );
};
