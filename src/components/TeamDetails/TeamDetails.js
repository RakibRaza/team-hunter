import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";

import banner from "../../images/home-hero-bg.jpg";
import { useStyles } from "./TeamDetailsStyle";
import maleTeam from "../../images/male-team.png";
import femaleTeam from "../../images/female-team.png";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import FlagIcon from "@material-ui/icons/Flag";
import WcIcon from "@material-ui/icons/Wc";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const TeamDetails = ({
  strTeamBanner,
  strTeamBadge,
  strTeam,
  strGender,
  strDescriptionEN,
  intFormedYear,
  strCountry,
  strStadiumDescription,
  strSport,
  strFacebook,
  strTwitter,
  strInstagram,
  strYoutube,
}) => {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.banner}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('${
            strTeamBanner || banner
          }') no-repeat center/cover fixed`,
        }}
      >
        <img src={strTeamBadge} alt="team logo" />
      </div>

      <Container>
        <Grid
          container
          my={4}
          component={Box}
          bgcolor="secondary.main"
          alignItems="center"
          color="#fff"
          style={{ borderRadius: ".8rem" }}
        >
          <Grid item md={6}>
            <Box p={3}>
              <Typography variant="h4" gutterBottom>
                {strTeam}
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AccountBalanceIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary={`Founded : ${intFormedYear}`} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FlagIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary={`Country : ${strCountry}`} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsSoccerIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary={`Sports Type : ${strSport}`} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WcIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary={`Gender : ${strGender}`} />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item md={6}>
            <img
              className={classes.teamImg}
              src={strGender.toLowerCase() === "male" ? maleTeam : femaleTeam}
              alt="team"
            />
          </Grid>
        </Grid>

        <Typography paragraph>{strDescriptionEN}</Typography>
        <Typography paragraph>{strStadiumDescription}</Typography>

        <Box className={classes.socialIcon} my={5}>
          <a target="_blank" rel="noreferrer" href={`https://${strFacebook}`}>
            <FacebookIcon />
          </a>
          <a target="_blank" rel="noreferrer" href={`https://${strTwitter}`}>
            <TwitterIcon />
          </a>
          <a target="_blank" rel="noreferrer" href={`https://${strYoutube}`}>
            <YouTubeIcon />
          </a>
          <a target="_blank" rel="noreferrer" href={`https://${strInstagram}`}>
            <InstagramIcon />
          </a>
        </Box>
      </Container>
    </>
  );
};

export default TeamDetails;
