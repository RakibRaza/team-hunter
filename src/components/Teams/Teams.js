import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import Team from "../Team/Team";
const getTeamsFromLS = () => {
  const teams = localStorage.getItem("teams");
  if (teams) {
    return JSON.parse(teams);
  } else {
    return [];
  }
};
const url =
  "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";

const Teams = () => {
  const [teams, setTeams] = useState(getTeamsFromLS());

  useEffect(() => {
    let isMounted = false;
    const fetchTeams = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (!isMounted) {
          setTeams(data.teams);
        }
      } catch (error) {
        if (!isMounted) {
          console.error(error);
        }
      }
    };
    fetchTeams();
    return () => {
      isMounted = true;
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  if (teams.length < 1) {
    return <Preloader />;
  }

  return (
    <Container component={Box} py={6}>
      <Grid container spacing={4} justify="center">
        {teams.map((team) => (
          <Team key={team.idTeam} {...team} />
        ))}
      </Grid>
    </Container>
  );
};

export default Teams;
