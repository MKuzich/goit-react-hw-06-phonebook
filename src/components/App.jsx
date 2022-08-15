import { useState, useEffect } from 'react';
import { Contacts } from 'components/Contacts/Contacts';
import { ContactAddForm } from 'components/ContactAddForm/ContactAddForm';
import { Filter } from 'components/Filter/Filter';
import { Header, SecondHeader, Section } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import { useContacts } from 'redux/contactsSlice';

export const App = () => {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const { contacts, add } = useContacts();

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);
      add(...parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (isFirstMount) {
      setIsFirstMount(false);
      return;
    }
    if (contacts.length === 0) {
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts, isFirstMount]);

  return (
    <>
      <GlobalStyle />
      <Section>
        <Header>Phonebook</Header>

        <ContactAddForm />
        <SecondHeader>Contacts</SecondHeader>
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};
