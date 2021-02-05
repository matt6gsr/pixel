import React from 'react';
import { HeaderWrapper, HeaderText } from '../styles/Header';
import { SortButton } from '../styles/commom';

const Header = ({
  text,
  list,
  userList,
  setUserList,
  setSortOrderAsc,
  sortOrderAsc,
  sortButtonHeader,
}) => {
  return (
    <HeaderWrapper list={list}>
      <HeaderText>{text}</HeaderText>
      {userList && userList.length > 1 && (
        <SortButton
          onClick={() => {
            if (sortOrderAsc) {
              setUserList((userList) =>
                userList.sort((a, b) => a.name.localeCompare(b.name))
              );
            } else {
              setUserList((userList) =>
                userList.sort((b, a) => a.name.localeCompare(b.name))
              );
            }
            setSortOrderAsc(!sortOrderAsc);
            console.log('userList in func', userList);
          }}
        >
          <svg
            width="20px"
            height="20px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
        </SortButton>
      )}
    </HeaderWrapper>
  );
};

export default Header;
