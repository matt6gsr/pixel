import styled from 'styled-components';

export const ListWrapper = styled.div`
  margin: ${(props) =>
    props.data ? `2rem 1rem 2rem 2rem` : `2rem 2rem 2rem 1rem`};
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 50%;
  background-color: white;
`;
