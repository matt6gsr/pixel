import React from 'react';
import { CardWrapper } from '../styles/PersonCard';

const PersonCard = ({ person }) => {
  return (
    <CardWrapper>
      <h4>{person.name}</h4>
    </CardWrapper>
  );
};

export default PersonCard;
