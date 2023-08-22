import * as css from "../Styles/NavbarCss";
import { useEffect, useState } from "react";
import { Box, Text, Image, Center, Link } from "@chakra-ui/react";

import Logo from "./Logo";

const Navbar = () => {
  return (
    <Box css={css.OuterBox}>
      <Box css={css.TopInnerCont}>
        <Logo fontSize={["24px", "24px", "26px"]} />
      </Box>
    </Box>
  );
};

export default Navbar;
