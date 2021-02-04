import React from 'react';
import {
  CardWrapper,
  Content,
  Avatar,
  Name,
  Email,
  Button,
} from '../styles/PersonCard';

const PersonCard = ({ person, createdList, handleClick }) => {
  return (
    <CardWrapper createdList={createdList}>
      <Avatar
        src={'https://i.pravatar.cc/150?u=' + person.email}
        alt={person.name}
      />
      <Content>
        <Name>{person.name}</Name>
        <Email>{person.email}</Email>
      </Content>
      <Button createdList={createdList} onClick={() => handleClick(person)}>
        {createdList ? (
          <svg
            width="20px"
            height="20px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        ) : (
          <svg
            width="20px"
            height="20px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </Button>
    </CardWrapper>
  );
};

export default PersonCard;
