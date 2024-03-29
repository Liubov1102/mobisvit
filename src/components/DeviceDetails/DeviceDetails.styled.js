import styled from "styled-components";
export const Box = styled.section`
  padding: 30px;

  /* display: flex; */
  /* align-items: center;
  /* justify-content: center; */

  color: #001739;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
  justify-content: center;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  width: 325px;
  height: auto;
  box-shadow: 0px 2px 4px -1px rgba(8, 87, 208, 0.25),
    0px 4px 5px 0px rgba(8, 87, 208, 0.25),
    0px 1px 10px 0px rgba(8, 87, 208, 0.25);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: fit-content;
  gap: 8px;
  padding: 30px 0px;
`;

export const Title = styled.h4`
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 36px */
  //  font-weight: 500;
  margin: 0;
`;

export const Label = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */

  // font-size: 12px;
  //  font-weight: 500;
  margin: 0px;
`;
