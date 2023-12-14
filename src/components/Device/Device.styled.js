import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  gap: 30px;
`;

export const CardWrapper = styled.article`
  border: 1px solid black;
  border-radius: 4px;
  transition: all 1s ease;
  /* transform: scale(1, 1); */
  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0px 2px 4px -1px rgba(8, 87, 208, 0.25),
      0px 4px 5px 0px rgba(8, 87, 208, 0.25),
      0px 1px 10px 0px rgba(8, 87, 208, 0.25);
  }
  > a {
    text-decoration: none;
  }
`;

export const ProductName = styled.h4`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: #001739;
`;
export const ProductPrice = styled.h4`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: #001739;
`;
