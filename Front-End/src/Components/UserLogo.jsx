import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { logout } from "../Redux/Authentication/action";
import Login from "../Pages/Login";
import SignUp from "../Pages/Signup";

const UserLogo = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const username = useSelector((state) => state.authReducer.username);
  const email = useSelector((state) => state.authReducer.email);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Menu>
        <MenuButton>
          {isAuth ? (
            <Avatar size="md" name={username} src="/path-to-user-avatar.png" />
          ) : (
            <Avatar size="md" />
          )}
        </MenuButton>
        <MenuList>
          {isAuth ? (
            <>
              <MenuItem>{`Welcome, ${username}`}</MenuItem>
              <MenuItem>{email}</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </>
          ) : (
            <>
              <MenuItem as={Link} to="/login">
                Sign in
              </MenuItem>
              <MenuItem as={Link} to="/signup">
                Sign up
              </MenuItem>
            </>
          )}
        </MenuList>
      </Menu>

      {showSignIn && <Login setShowSignIn={setShowSignIn} />}
      {showSignUp && <SignUp setShowSignUp={setShowSignUp} />}
    </>
  );
};

export default UserLogo;