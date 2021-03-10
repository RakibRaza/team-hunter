import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { NavLink } from "react-router-dom";
import { useStyles } from "./TeamStyle";

const Team = ({ idTeam, strTeam, strTeamBadge, strSport }) => {
  const classes = useStyles();
  return (
    <Grid item sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.cardImg}
            component="img"
            alt={strTeam}
            image={strTeamBadge || "https://via.placeholder.com/150"}
            title={strTeam}
          />
          <CardContent>
            <Typography align="center" variant="h3">
              {strTeam}
            </Typography>
            <Typography variant="h6" align="center">
              {`Sports Type : ${strSport}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardBtn}>
          <Button
            component={NavLink}
            to={`team/${idTeam}`}
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            size="large"
            color="secondary"
          >
            Explore
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Team;
