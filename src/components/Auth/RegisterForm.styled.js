// .form {
//   width: 320px;
// }

import styled from "styled-components";

export const Box = styled.section`
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #001739;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 16px;
`;
export const Input = styled.input`
  border: 1px solid #2a2a2a;
  font: inherit;
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  width: 360px;
  outline: 0;
  margin-top: 4px;
`;
export const Title = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  color: #001739;
  margin: 0 0 30px 0;
`;
