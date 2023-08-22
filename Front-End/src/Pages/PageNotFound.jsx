import { css } from "@emotion/react";
import React from "react";
import { Box } from "@chakra-ui/react";

const PageNotFound = () => {
  return <Box css={OuterBox}>PageNotFound</Box>;
};

export default PageNotFound;

const OuterBox = css`
  width: 100%;

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
