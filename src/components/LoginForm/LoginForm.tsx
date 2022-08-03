import React, { useContext } from "react";
import { useState } from "react";
import { Box, Button, Paper, Typography, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
const axios = require("axios").default;
const LoginForm = () => {
  let [userName, setUsername] = useState<String>("");
  let [password, setPassword] = useState<String>("");
  let [errorMessage, setErrorMessage] = useState<String>("");
  // let [loggedIn, setLoggedIn] = useState<boolean>(false);
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const userLogin = () => {
    if (userName.length === 0 || password.length === 0) {
      setErrorMessage("Input fields cannot be empty!");
    } else {
      const newUserLogin = {
        username: userName,
        password: password,
      };

      const sendLoginRequest = async () => {
        try {
          const resp = await axios.post(
            "http://localhost:3000/user/login",
            newUserLogin
          );
          if (resp.status === 200) {
            setErrorMessage("Sucessfully logged in!");
            setLoggedIn(true);
            localStorage.setItem("authorizationToken", resp.data.token);
            navigate("/");
            console.log(resp.data);
          } else {
            return null;
          }
        } catch (err) {
          // Handle Error Here
          setErrorMessage("Invalid user credentials.");
          console.error(err);
        }
      };

      sendLoginRequest();
    }
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Paper elevation={15} sx={{ width: "30%", padding: 5 }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
              required
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <TextField
              required
              label="Password"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              sx={{ marginTop: "20px" }}
            ></TextField>
            <Button
              variant="contained"
              color="primary"
              sx={{ m: 2 }}
              onClick={() => {
                userLogin();
              }}
            >
              Login
            </Button>
            {errorMessage === "Sucessfully logged in!" ? (
              <div style={{ color: "green" }}>{errorMessage}</div>
            ) : (
              <div style={{ color: "red" }}>{errorMessage}</div>
            )}
            <Typography>
              <Button>
                <Link
                  to="/register"
                  color="inherit"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  Don't have an account? Register here
                </Link>
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default LoginForm;
