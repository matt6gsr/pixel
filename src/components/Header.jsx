import React from 'react';
import { HeaderWrapper, HeaderText } from '../styles/Header';

export const Header = ({ text }) => {
  return (
    <HeaderWrapper>
      <HeaderText>{text}</HeaderText>
    </HeaderWrapper>
  );
};
