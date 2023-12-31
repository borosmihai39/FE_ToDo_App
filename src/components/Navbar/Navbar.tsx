import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";

const Navbar = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const userLogout = () => {
    setLoggedIn(false);
    localStorage.clear();
    navigate("/");
  };
  return (
    <AppBar position="static" sx={{ background: "rgb(0, 173, 181)" }}>
      <>{console.log(loggedIn)}</>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <Link
            to="/"
            color="inherit"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ListAltIcon />
          </Link>
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          To Do List App
        </Typography>
        {localStorage.getItem("username") === "admin" ? (
          <Stack direction="row" spacing={2}>
            <Button color="inherit">
              <Link
                to="/admin"
                color="inherit"
                style={{ textDecoration: "none", color: "white" }}
              >
                Admin Dashboard
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                to="/features"
                color="inherit"
                style={{ textDecoration: "none", color: "white" }}
              >
                Features
              </Link>
            </Button>
            {loggedIn === false ? (
              <Button color="inherit">
                <Link
                  to="/login"
                  color="inherit"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </Button>
            ) : (
              <Button
                color="inherit"
                onClick={() => {
                  userLogout();
                }}
              >
                Logout
              </Button>
            )}
          </Stack>
        ) : (
          <Stack direction="row" spacing={2}>
            <Button color="inherit">
              <Link
                to="/features"
                color="inherit"
                style={{ textDecoration: "none", color: "white" }}
              >
                Features
              </Link>
            </Button>
            {loggedIn === false ? (
              <Button color="inherit">
                <Link
                  to="/login"
                  color="inherit"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </Button>
            ) : (
              <Button
                color="inherit"
                onClick={() => {
                  userLogout();
                }}
              >
                Logout
              </Button>
            )}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
