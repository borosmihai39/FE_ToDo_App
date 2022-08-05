import React from "react";
import { Container, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <Box
        py={{ xs: 5, sm: 5 }}
        bgcolor="rgb(34, 40, 49)"
        color="white"
        sx={{ marginTop: "3%" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link
                  to="/contact"
                  color="inherit"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link
                  to="/login"
                  color="inherit"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </Box>
              <Box>
                <Link
                  to="/register"
                  color="inherit"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>About</Box>
              <Box>
                <Link
                  to="/features"
                  color="inherit"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Features
                </Link>
              </Box>
              <Box>
                <a
                  href="http://localhost:3000/api/setupTodos"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  [Legacy] Seed DB
                </a>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            To Do Full Stack Web Application &reg; mihai.boros@tremend.com{" "}
            {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
