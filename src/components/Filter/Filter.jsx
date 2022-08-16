import React from 'react';
import { Label, Input } from './Filter.styled';
import { useContacts } from 'redux/contactsSlice';

export const Filter = () => {
  const { change } = useContacts();
  const handleChange = e => change(e.target.value);
  return (
    <Label htmlFor="filter">
      Find contacts by name
      <Input type="text" name="filter" onChange={handleChange} />
    </Label>
  );
};
