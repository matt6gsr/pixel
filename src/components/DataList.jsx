import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListWrapper } from '../styles/commom';
import Header from './Header';
import Spinner from './Spinner';
import PersonCard from './PersonCard';

const DataList = ({ people, setPeople, setUserList }) => {
  const [loading, setLoading] = useState('initial');

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading('loading');
      await axios
        .get('https://8ee41f94-d4f4-439d-8233-e573edca74ff.mock.pstmn.io/users')
        .then((res) => setPeople(res.data.data));
      setLoading('complete');
    };
    fetchPeople();
  }, [setPeople]);

  const handleAddPerson = (person) => {
    setUserList((userList) => [...userList, person]);
    setPeople((people = people.filter((p) => p !== person)));
  };

  return (
    <ListWrapper data="true">
      {loading === 'loading' && <Spinner text="Loading Contacts..." />}
      {loading === 'complete' && people.length === 0 && (
        <Header text="Sorry, there's nobody here!" />
      )}
      {loading === 'complete' && people.length !== 0 && (
        <>
          <Header text="Click a contact to add them to your list" list="true" />
          {people.map((person, i) => {
            return (
              <PersonCard
                key={i}
                person={person}
                handleClick={handleAddPerson}
              />
            );
          })}
        </>
      )}
    </ListWrapper>
  );
};

export default DataList;
