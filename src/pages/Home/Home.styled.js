import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`;
export const Image1 = styled.img`
  height: 150px;
`;
export const Image2 = styled.img`
  height: 120px;
  margin-bottom: 30px;
`;
export const Image3 = styled.img`
  height: 160px;
  margin-bottom: 28px;
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
