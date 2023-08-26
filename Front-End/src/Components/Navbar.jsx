import * as css from "../Styles/NavbarCss";
import { Link as ScrollLink } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import {
  Box,
  Text,
  Image,
  Center,
  Avatar,
  InputGroup,
  InputLeftElement,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import {
  BsPersonCircle as PersonLogo,
  BsSearch as SearchIcon,
} from "react-icons/bs";

import Logo from "./Logo";
import { Context } from "../Redux/Context";
import UserLogo from "./UserLogo";

const Navbar = () => {
  const { token, setToken, loggedInUser, userNameLogged, setUserNameLogged } =
    useContext(Context);
  const location = useLocation();
  const [searchInp, setSearchInp] = useState("");

  const ScrollOffset = false ? -90 : false ? -100 : -120;

  return (
    <Box css={css.OuterBox} fontFamily="primaryf">
      <Box css={css.TopInnerCont}>
        <Logo fontSize={["20px", "22px", "26px"]} />

        {/* Navbar Middle Items */}
        {location.pathname === "/" ? (
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
                <Center css={css.LinksText} color="greytext">
                  {item.title}
                </Center>
              </ScrollLink>
            ))}
          </Box>
        ) : (
          <Box css={css.SearchCont}>
            <InputGroup>
              <InputLeftElement>
                <Image as={SearchIcon} color="greytext" css={css.SearchIcon} />
              </InputLeftElement>
              <Input
                value={searchInp}
                onChange={(e) => setSearchInp(e.target.value)}
                type="text"
                placeholder="Search"
                borderColor="greytext"
                css={css.InputBox}
                _placeholder={{ color: "greytext" }}
                _hover={{ color: "greytext", borderColor: "greytext" }}
                _focus={{ color: "greytext", borderColor: "greytext" }}
              />
            </InputGroup>
          </Box>
          
        )}

        {/* Log In & Sign Up */}
        {token ? (
          <Menu>
            <MenuButton>
              <Avatar
                name={userNameLogged}
                size={["xs", "xs", "sm"]}
                bg="primary"
                color="white"
              />
            </MenuButton>
            <UserLogo/>
            <MenuList>
              <Text css={css.NameText}>{`Hi ${userNameLogged} !`}</Text>
              <MenuItem>
                <Text css={css.MenuTextsCss}>Log Out</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Menu>
            <MenuButton>
              <Image color="greytext" as={PersonLogo} css={css.PersonIconCss} />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <NavLink to="/login" css={css.MenuTextsCss}>Log In</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/signup" css={css.MenuTextsCss}>Sign Up</NavLink>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
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
    to: "workflow",
    title: "Workflow",
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
