import styled from 'styled-components';

export const HeaderText = styled.h3`
  padding: ${(props) => (props.list ? `2rem 0 0 0` : `2rem`)};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 5px 5px 0 0;
`;
