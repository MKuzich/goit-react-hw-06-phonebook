import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Contacts } from 'components/Contacts/Contacts';
import { ContactAddForm } from 'components/ContactAddForm/ContactAddForm';
import { Filter } from 'components/Filter/Filter';
import { Header, SecondHeader, Section } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);
      setContacts(parsedContacts);
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
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== e.target.id)
    );
  };

  const filterChange = e => {
    setFilter(e.target.value);
  };

  const contactsChange = (name, number) => {
    setContacts(prevState => {
      if (
        prevState.find(contact =>
          contact.name.toLowerCase().includes(name.toLowerCase())
        )
      ) {
        return Notify.warning(`${name} is already in contacts`);
      }
      return [...prevState, { name: name, number: number, id: nanoid() }];
    });
  };

  return (
    <>
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
