import React from 'react';
import { ListWrapper } from '../styles/commom';
import { Header } from './Header';
import PersonCard from './PersonCard';

const UserCreatedList = ({ people, setPeople, userList, setUserList }) => {
  const handleRemovePerson = (person) => {
    setPeople((people) => [...people, person]);
    setUserList((userList = userList.filter((user) => user !== person)));
  };

  return (
    <ListWrapper>
      <Header
        text="Please click a person to remove them from your list"
        list="true"
      />
      {userList.length > 0 &&
        userList.map((user, i) => {
          return (
            <PersonCard
              key={i}
              person={user}
              createdList="true"
              handleClick={handleRemovePerson}
            />
          );
        })}
    </ListWrapper>
  );
};

export default UserCreatedList;
