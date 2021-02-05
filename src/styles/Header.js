import styled from 'styled-components';

export const HeaderText = styled.h3`
  padding: 0;
  margin: 0;
`;

export const HeaderWrapper = styled.div`
  padding: ${(props) => (props.list ? `2rem 0 0 0` : `2rem`)};
  display: flex;
  justify-content: space-between;
  justify-items: center;
  background-color: white;
  border-radius: 5px 5px 0 0;
  position: relative;
`;
