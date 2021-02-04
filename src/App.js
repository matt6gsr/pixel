import React, { useState } from 'react';
import { AppWrapper, ContentWrapper } from './styles/App';
import { Header } from './components/Header';
import DataList from './components/DataList';
import UserCreatedList from './components/UserCreatedList';

function App() {
  const [people, setPeople] = useState([]);

  return (
    <AppWrapper>
      <Header text="Create Your List Of People" />
      <ContentWrapper>
        <DataList people={people} setPeople={setPeople} />
        <UserCreatedList />
      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;
