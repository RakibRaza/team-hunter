import {
  AppBar,
  Button,
  Container,
  Hidden,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar className={classes.root} position="static" color="primary">
        <Container>
          <Toolbar>
            <Typography style={{ flexGrow: 1 }} variant="h5">
              Team Hunter
            </Typography>
            <Hidden smDown>
              <Button component={Link} to="/" color="inherit">
                Home
              </Button>
              <Button component={Link} to="/about" color="inherit">
                About
              </Button>
              <Button component={Link} to="/contact" color="inherit">
                Contact
              </Button>
            </Hidden>

            <Hidden mdUp>
              <IconButton onClick={handleClick} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={Link} to="/" onClick={handleClose}>
                  Home
                </MenuItem>
                <MenuItem component={Link} to="/about" onClick={handleClose}>
                  About
                </MenuItem>
                <MenuItem component={Link} to="/contact" onClick={handleClose}>
                  Contact
                </MenuItem>
              </Menu>
            </Hidden>
          </Toolbar>
          <ScrollToTop showBelow={250} />
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
