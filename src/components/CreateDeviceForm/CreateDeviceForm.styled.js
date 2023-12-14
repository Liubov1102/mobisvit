import styled from "styled-components";
import { Field } from "formik";
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 16px;
`;
export const Input = styled(Field)`
  border: 1px solid #2a2a2a;
  font: inherit;
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  width: 360px;
  outline: 0;
  margin-top: 4px;
`;
export const Button = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px;
  //margin-top: 20px;
  //margin:0 auto ;
  //margin-top: 16px;
  display: block;
  color: #001739;
  background: rgba(94, 170, 232, 0.34);
  border: none;
  border-radius: 12px;
  // transition-property: box-shadow;
  font-weight: 500;
  font-size: 16px;
  box-shadow: 0px 2px 4px -1px rgba(8, 87, 208, 0.25),
    0px 4px 5px 0px rgba(8, 87, 208, 0.25),
    0px 1px 10px 0px rgba(8, 87, 208, 0.25);
  // box-shadow: 4px 4px 10px 0 rgb(37 38 50 / 70%);
  &:hover {
    box-shadow: none;
  }
`;
