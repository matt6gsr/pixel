import React from 'react';
import { AppWrapper, ContentWrapper } from './styles/App';
import { Header } from './components/Header';
import DataList from './components/DataList';
import UserCreatedList from './components/UserCreatedList';

function App() {
  return (
    <AppWrapper>
      <Header text="Create Your List Of People" />
      <ContentWrapper>
        <DataList />
        <UserCreatedList />
      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;
