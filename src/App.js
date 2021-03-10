import { CssBaseline, ThemeProvider } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { theme } from "./theme";
import Footer from "./components/Footer/Footer";
import SingleTeam from "./Pages/SingleTeam";
import ScrollRestoration from "./ScrollRestoration";
import Error from "./Pages/Error";
import Contact from "./Pages/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollRestoration />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/team/:id">
            <SingleTeam />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
        <CssBaseline />
      </Router>
    </ThemeProvider>
  );
}

export default App;
