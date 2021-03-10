import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import banner from "../../images/home-hero-bg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${banner}') no-repeat center/cover fixed`,
    height: "500px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3">Team Hunter</Typography>
    </div>
  );
};

export default Hero;
