import { makeStyles } from "@material-ui/core";
import spinner from "../../images/spinner.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "calc(100vh - 64px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const Preloader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Preloader;
