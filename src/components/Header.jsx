import React from 'react';
import { HeaderWrapper, HeaderText } from '../styles/Header';

export const Header = ({ text, list }) => {
  return (
    <HeaderWrapper>
      <HeaderText list={list}>{text}</HeaderText>
    </HeaderWrapper>
  );
};
