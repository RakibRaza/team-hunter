import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: " #00FDDC",
    padding: theme.spacing(2),
    boxShadow: theme.shadows[4],
    color: "#000",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography align="center">
        Programming Hero Learner. Copyright © {new Date().getFullYear()} | Rakib
        Raza All Right Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
