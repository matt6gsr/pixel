import styled from 'styled-components';

export const CardWrapper = styled.div`
  border-radius: 0.5rem;
  background: #f5f5f5;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  justify-items: center;
`;

export const Content = styled.div`
  flex: 4;
  margin: 1rem;
`;

export const Avatar = styled.img`
  border: 0.33rem solid #fff;
  border-radius: 100%;
  height: 3.5rem;
  width: 3.5rem;
  overflow: hidden;
  margin-right: 1rem;
  margin: 0.5rem;
  flex: none;
`;

export const Name = styled.h4`
  margin: 0 0 0.5rem;
  font-weight: bold;
  color: #666;
`;

export const Email = styled.div`
  margin: 0;
  font-weight: normal;
  color: #888;
`;

export const Button = styled.button`
  margin: 0;
  background: linear-gradient(
    to right bottom,
    rgb(190, 242, 100),
    rgb(16, 185, 129)
  );
  border: 0;
  color: #fff;
  overflow: hidden;
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 1rem;
`;
