import React from "react";
import {
  Box,
  Input,
  Button,
  Container,
  InputLabel,
  Grid,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
const RegisterForm = () => {
  let [userName, setUsername] = useState<String>("");
  let [password, setPassword] = useState<String>("");
  let [confirmPassword, setComfirmPassword] = useState<String>("");
  let [errorMessage, setErrorMessage] = useState<String>("");
  const passwordValidation = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
    } else if (
      userName.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      setErrorMessage("Input fields cannot be empty!");
    } else {
      setErrorMessage("OK");
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
        <Paper elevation={15} sx={{ width: "30%", padding: 5, marginTop: 5 }}>
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

            <TextField
              required
              type="password"
              label="Confirm Password"
              sx={{ marginTop: "20px" }}
              onChange={(event) => {
                setComfirmPassword(event.target.value);
              }}
            ></TextField>
            <Button
              onClick={() => {
                passwordValidation();
              }}
              variant="contained"
              color="primary"
              sx={{ m: 2 }}
            >
              Register
            </Button>
            <div style={{ color: "red" }}>{errorMessage}</div>
            <Typography>
              <Button>
                <Link
                  to="/login"
                  color="inherit"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  Back to Login
                </Link>
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default RegisterForm;
