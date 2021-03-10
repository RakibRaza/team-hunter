import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  card: { height: "100%", display: "flex", flexDirection: "column" },
  cardImg: {
    width: "75%",
    margin: "auto",
    padding: "1rem 0",
  },
  cardBtn: {
    justifyContent: "center",
    marginBottom: theme.spacing(2),
    marginTop: "auto",
  },
}));
