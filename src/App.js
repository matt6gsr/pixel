import React, { useState } from 'react';
import { AppWrapper, ContentWrapper } from './styles/App';
import Header from './components/Header';
import DataList from './components/DataList';
import UserCreatedList from './components/UserCreatedList';

function App() {
  const [people, setPeople] = useState([]);
  const [userList, setUserList] = useState([]);
  const [sortOrderAsc, setSortOrderAsc] = useState(true);

  return (
    <AppWrapper>
      <Header text="Create Your List Of Contacts" />
      <ContentWrapper>
        <DataList
          people={people}
          setPeople={setPeople}
          userList={userList}
          setUserList={setUserList}
        />
        <UserCreatedList
          people={people}
          setPeople={setPeople}
          userList={userList}
          setUserList={setUserList}
          sortOrderAsc={sortOrderAsc}
          setSortOrderAsc={setSortOrderAsc}
        />
      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;
