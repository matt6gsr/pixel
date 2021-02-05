import styled from 'styled-components';

export const HeaderText = styled.h3`
  padding: 0;
  margin: 0;
`;

export const HeaderWrapper = styled.div`
  padding: ${(props) => (props.list ? `2rem 0 1rem 1rem` : `2rem`)};
  display: flex;
  justify-content: ${(props) => (props.list ? 'space-between' : 'center')};
  justify-items: center;
  background-color: white;
  border-radius: 5px 5px 0 0;
  position: relative;
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
