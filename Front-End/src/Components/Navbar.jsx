import * as css from "../Styles/NavbarCss";
import { useEffect, useState } from "react";
import { Box, Text, Image, Center, Link } from "@chakra-ui/react";

import Logo from "../Images/Logo.png";

const Navbar = () => {
  return (
    <Box css={css.OuterBox}>
      <Box css={css.TopInnerCont}>
        <Image src={Logo} css={css.ImageCss} />
      </Box>
    </Box>
  );
};

export default Navbar;
