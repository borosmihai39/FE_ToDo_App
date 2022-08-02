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
} from "@mui/material";
import { Link } from "react-router-dom";
const LoginForm = () => {
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
            <InputLabel>Username</InputLabel>
            <Input></Input>
            <InputLabel sx={{ marginTop: 3 }}>Password</InputLabel>
            <Input></Input>
            <Button variant="contained" color="primary" sx={{ m: 2 }}>
              Login
            </Button>
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
