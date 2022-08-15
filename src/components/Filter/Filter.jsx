import React from 'react';
import { Label, Input } from './Filter.styled';
import { useFilter } from 'redux/filterSlice';

export const Filter = () => {
  const { change } = useFilter();
  const handleChange = e => change(e.target.value);
  return (
    <Label htmlFor="filter">
      Find contacts by name
      <Input type="text" name="filter" onChange={handleChange} />
    </Label>
  );
};
