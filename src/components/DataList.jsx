import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListWrapper } from '../styles/commom';
import { Header } from './Header';
import Spinner from './Spinner';

const DataList = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = () => {
      axios
        .get('https://8ee41f94-d4f4-439d-8233-e573edca74ff.mock.pstmn.io/users')
        .then((res) => setPeople(res.data));
      setLoading(false);
    };
    fetchPeople();
  }, []);

  console.log('people', people);
  console.log('loading', loading);

  return (
    <ListWrapper>
      {loading && <Spinner text="Loading People..." />}
      {!loading && Object.keys(people).length === 0 && (
        <Header text="Sorry, there was a problem rounding the people up!" />
      )}
      {!loading && Object.keys(people).length !== 0 && (
        <Header text="Please click a person to add them to your list" />
      )}
    </ListWrapper>
  );
};

export default DataList;
