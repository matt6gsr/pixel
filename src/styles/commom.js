import styled from 'styled-components';

export const ListWrapper = styled.div`
  margin: ${(props) =>
    props.data ? `2rem 1rem 2rem 2rem` : `2rem 2rem 2rem 1rem`};
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 50%;
  background-color: white;
`;

export const SortButton = styled.button`
  border: none;
  background-image: linear-gradient(
    to right bottom,
    rgb(199, 206, 255),
    rgb(59, 82, 255)
  );
  overflow: none;
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  position: absolute;
  top: 1.6rem;
  right: 1rem;

  :focus {
    outline: 0;
  }
  :hover {
    cursor: pointer;
  }
`;
