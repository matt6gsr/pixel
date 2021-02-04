import React from 'react';
import { HeaderWrapper, HeaderText } from '../styles/Header';
import { SortButton } from '../styles/commom';

export const Header = ({ text, list, userList, setUserList }) => {
  console.log('userList in Header', userList);

  return (
    <HeaderWrapper>
      <HeaderText list={list}>{text}</HeaderText>
      {userList && userList.length > 1 && (
        <SortButton
          onClick={() => {
            console.log('fired');
            setUserList((userList) =>
              userList.sort((a, b) => a.name.localeCompare(b.name))
            );
            console.log('userList in func', userList);
          }}
        >
          A {`>`} Z
        </SortButton>
      )}
    </HeaderWrapper>
  );
};
