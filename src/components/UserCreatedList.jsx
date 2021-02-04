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
        text="Click a contact to remove them from this list"
        list="true"
        userList={userList}
        setUserList={setUserList}
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
      {!userList.length && <Header text="Your contact list is empty" />}
    </ListWrapper>
  );
};

export default UserCreatedList;
