import React from 'react';
import { AppWrapper, ContentWrapper } from './styles/App';
import { Header } from './components/Header';

function App() {
  return (
    <AppWrapper>
      <Header />
      <ContentWrapper></ContentWrapper>
    </AppWrapper>
  );
}

export default App;
