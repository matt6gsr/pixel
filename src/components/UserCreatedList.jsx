import React from 'react';
import { ListWrapper } from '../styles/commom';
import { Header } from './Header';
import PersonCard from './PersonCard';

const UserCreatedList = ({ people, peopleList, userList, setUserList }) => {
  return (
    <ListWrapper>
      <Header text="Please click a person to remove them from your list" list />
      {userList.length > 0 &&
        userList.map((user, i) => {
          console.log('user in map', user);
          return <PersonCard key={i} person={user} />;
        })}
    </ListWrapper>
  );
};

export default UserCreatedList;
