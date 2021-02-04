import React from 'react';
import {
  CardWrapper,
  Content,
  Avatar,
  Name,
  Email,
  Button,
} from '../styles/PersonCard';

const PersonCard = ({ person, userList }) => {
  return (
    <CardWrapper>
      <Avatar
        src={'https://i.pravatar.cc/150?u=' + person.email}
        alt={person.name}
      />
      <Content>
        <Name>{person.name}</Name>
        <Email>{person.email}</Email>
      </Content>
      <Button>
        <svg
          width="20px"
          height="20px"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Button>
    </CardWrapper>
  );
};

export default PersonCard;
