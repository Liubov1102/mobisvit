import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.section`
  background-color: #dbe5f0;
  min-height: 100vh;

  margin: 0 auto;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: -20px;
  /* justify-content: center; */
  font-size: 32px;
  color: #001739;
`;
export const P = styled.p`
  margin: 10px;
`;
export const Link = styled(NavLink)`
  display: inline-block;
  padding: 4px 100px;
  text-decoration: none;
  color: #fff;
  background: #da251c;
  font-weight: 900;
  text-transform: uppercase;
  border-radius: 20px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #ebeffb;
    background: #b6312a;
  }
`;
