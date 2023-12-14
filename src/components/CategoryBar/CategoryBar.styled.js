import styled from "styled-components";

export const Box = styled.div`
  /* height: 80px;
  margin: 0 auto; */
  /* padding: 30px; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  display: block;
  margin-right: 30px;
  margin-top: 75px;
  letter-spacing: 1px;
`;

export const Item = styled.div`
  padding: 8px 24px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #001739;
  cursor: pointer;
  text-transform: uppercase;
  text-align: center;
  border-radius: 12px;
  background: rgba(94, 170, 232, 0.34);
  box-shadow: 0px 2px 4px -1px rgba(8, 87, 208, 0.25),
    0px 4px 5px 0px rgba(8, 87, 208, 0.25),
    0px 1px 10px 0px rgba(8, 87, 208, 0.25);

  &.active {
    background: rgba(94, 170, 232);
    padding: 4px 12px;
    border-radius: 12px;
    color: #fff;
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    color: #fff;
  }
`;
