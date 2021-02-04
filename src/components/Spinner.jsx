import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { SpinnerText, SpinnerWrapper } from '../styles/Spinner';

const Spinner = ({ text }) => {
  return (
    <SpinnerWrapper>
      <BeatLoader color="#3e3e45" />
      <SpinnerText>{text}</SpinnerText>
    </SpinnerWrapper>
  );
};

export default Spinner;
