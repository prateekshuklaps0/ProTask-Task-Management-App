import { css } from "@emotion/react";

export const OuterBox = css`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: white;
  border-bottom: 1px solid red;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
export const TopInnerCont = css`
  width: 85%;
  height: 55px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

/* 

export const Temp = css`

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

*/
