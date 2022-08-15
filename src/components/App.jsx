import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Contacts } from 'components/Contacts/Contacts';
import { ContactAddForm } from 'components/ContactAddForm/ContactAddForm';
import { Filter } from 'components/Filter/Filter';
import { Header, SecondHeader, Section } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import { useContacts } from 'redux/contactsSlice';
import { useFilter } from 'redux/filterSlice';

export const App = () => {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const { contacts, add, remove } = useContacts();
  const { filter, change } = useFilter();

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);
      parsedContacts.map(contact => add(contact));
    }
  }, []);

  useEffect(() => {
    if (isFirstMount) {
      setIsFirstMount(false);
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts, isFirstMount]);

  const deleteContact = e => {
    remove(e.target.id);
  };

  const filterChange = e => {
    change(e.target.value);
  };

  const contactsChange = (name, number) => {
    if (
      contacts.find(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      return Notify.warning(`${name} is already in contacts`);
    }
    return add({ name: name, number: number, id: nanoid() });
  };

  return (
    <>
      <GlobalStyle />
      <Section>
        <Header>Phonebook</Header>

        <ContactAddForm contactsChange={contactsChange} />
        <SecondHeader>Contacts</SecondHeader>
        <Filter filterChange={filterChange} />
        <Contacts
          contacts={contacts}
          filter={filter}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
};
