import * as css from "../Styles/NavbarCss";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import { Box, Text, Image, Center, Button } from "@chakra-ui/react";

import Logo from "./Logo";

const Navbar = () => {
  const ScrollOffset = false ? -90 : false ? -100 : -120;
  return (
    <Box css={css.OuterBox}>
      <Box css={css.TopInnerCont}>
        <Logo fontSize={["24px", "24px", "26px"]} />

        <Box css={css.LinksCont}>
          {LinksData.map((item, ind) => (
            <ScrollLink
              offset={ScrollOffset}
              to={item.to}
              style={{ zIndex: 1200 }}
              smooth={true}
              duration={600}
              key={item.title + ind}
            >
              <Center>{item.title}</Center>
            </ScrollLink>
          ))}
        </Box>

        <Box>
          {true && <Button>LogIn</Button>}
          {true && <Button>SignUp</Button>}

          {!true && <Text>Hi! Prateek</Text>}
          {!true && <Button>LogOut</Button>}
        </Box>
      </Box>
    </Box>
  );
};

const LinksData = [
  {
    to: "features",
    title: "Features",
  },
  {
    to: "workFlow",
    title: "WorkFlow",
  },
  {
    to: "pricing",
    title: "Pricing",
  },
  {
    to: "about",
    title: "About",
  },
];

export default Navbar;
