import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  banner: {
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "300px",
    },
  },
  teamImg: {
    width: "100%",
    padding: ".6rem",
    display: "block",
  },
  icon: {
    color: "#fff",
  },
  socialIcon: {
    display: "flex",
    justifyContent: "center",
    "& svg": {
      marginRight: "2rem",
      color: theme.palette.secondary.main,
      background: "#fff",
      width: "50px",
      height: "50px",
      padding: theme.spacing(1),
      borderRadius: "50%",
      transition: "all .6s ease",
    },
    "& svg:hover": {
      background: "#000",
      color: "#fff",
    },
  },
}));
