import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 12px;
  display: inline-flex;
  align-items: center;
  color: #001739;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  background: rgba(94, 170, 232, 0.34);
  border: none;
  border-radius: 12px;
  /* text-transform: uppercase;
  cursor: pointer;
  padding: 4px 12px;
  // padding: 10px;
  //margin-top: 20px;
  //margin:0 auto ;
  //margin-top: 16px;

  color: #001739;
  background: rgba(94, 170, 232, 0.34);
  border: none; */

  // transition-property: box-shadow;

  box-shadow: 0px 2px 4px -1px rgba(8, 87, 208, 0.25),
    0px 4px 5px 0px rgba(8, 87, 208, 0.25),
    0px 1px 10px 0px rgba(8, 87, 208, 0.25);
  // box-shadow: 4px 4px 10px 0 rgb(37 38 50 / 70%);
  &:hover {
    box-shadow: none;
  }
`;
