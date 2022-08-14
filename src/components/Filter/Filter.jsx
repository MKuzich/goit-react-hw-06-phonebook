import React from 'react';
import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filterChange }) => (
  <Label htmlFor="filter">
    Find contacts by name
    <Input type="text" name="filter" onChange={filterChange} />
  </Label>
);

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
