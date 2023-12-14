import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 24px 8px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: #001739;
  text-transform: uppercase;
  margin-left: 24px;
  //  border-bottom: 3px solid transparent;

  &.active {
    //  border-bottom: 3px solid #001739;
    /* background: rgba(94, 170, 232); */
    //padding: 4px 12px;
    /* border-radius: 12px; */
    // color: #fff;
    font-weight: 800;
    // box-shadow: 0px 2px 4px -1px rgba(8, 87, 208, 0.25),
    //  0px 4px 5px 0px rgba(8, 87, 208, 0.25),
    //  0px 1px 10px 0px rgba(8, 87, 208, 0.25);
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    //  border-bottom: 3px solid #001739;
    text-shadow: 1px 1px 2px #001739;
    // font-weight: 900;
    //   box-shadow: 0px 2px 4px -1px rgba(8, 87, 208, 0.25),
    //     0px 4px 5px 0px rgba(8, 87, 208, 0.25),
    //     0px 1px 10px 0px rgba(8, 87, 208, 0.25);
  }
`;
