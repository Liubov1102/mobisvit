import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  margin-bottom: 8px;
  color: #001739;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;

  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0px 2px 4px -1px rgba(8, 87, 208, 0.25),
    0px 4px 5px 0px rgba(8, 87, 208, 0.25),
    0px 1px 10px 0px rgba(8, 87, 208, 0.25);
  &:hover {
    /* color: #da251c; */
    background: rgba(94, 170, 232, 0.34);

    /* color: #fff; */
  }
`;
