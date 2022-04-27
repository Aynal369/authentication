import React from "react";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const Header = () => {
  const { loggedInUser, userLogout } = useAuth();
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Authentication
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/about-me">
                  About Me
                </NavLink>
              </li> */}
            </ul>
            {loggedInUser.email ? (
              <Button variant="contained" color="error" onClick={userLogout}>
                Log Out
              </Button>
            ) : (
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={handleLogin}
                >
                  Log In
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={handleSignup}
                >
                  Sign Up
                </Button>
              </Stack>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
