import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import banner from "../../images/about-bg.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${banner}') no-repeat center/cover fixed`,
    display: "flex",
    alignItems: "center",
    color: theme.palette.grey[50],
    minHeight: "calc(100vh - 64px)",
  },
  heroBtn: {
    paddingTop: theme.spacing(5),
  },
}));
const AboutHero = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          About layout
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>
        <div className={classes.heroBtn}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button size="large" variant="contained" color="primary">
                Main call to action
              </Button>
            </Grid>
            <Grid item>
              <Button size="large" variant="outlined" color="inherit">
                Secondary action
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default AboutHero;
