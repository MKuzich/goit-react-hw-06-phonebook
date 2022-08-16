import { Contacts } from 'components/Contacts/Contacts';
import { ContactAddForm } from 'components/ContactAddForm/ContactAddForm';
import { Filter } from 'components/Filter/Filter';
import { Header, SecondHeader, Section } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
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
