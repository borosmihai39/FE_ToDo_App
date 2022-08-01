import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Link,
} from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <Link href="/" color="inherit">
            <ListAltIcon />
          </Link>
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          To Do List App
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
