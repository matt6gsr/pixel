import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListWrapper } from '../styles/commom';
import { Header } from './Header';
import Spinner from './Spinner';
import PersonCard from './PersonCard';

const DataList = ({ people, setPeople, userList, setUserList }) => {
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

  console.log('people', people);
  console.log('loading', loading);
  console.log('userList', userList);

  return (
    <ListWrapper data>
      {loading === 'loading' && <Spinner text="Loading People..." />}
      {loading === 'complete' && people.length === 0 && (
        <Header text="Sorry, there's nobody here!" list />
      )}
      {loading === 'complete' && people.length !== 0 && (
        <>
          <Header text="Please click a person to add them to your list" list />
          {people.map((person, i) => {
            console.log('person in map', person);
            return <PersonCard key={i} person={person} />;
          })}
        </>
      )}
    </ListWrapper>
  );
};

export default DataList;
