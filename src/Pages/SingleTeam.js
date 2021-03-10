import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Preloader from "../components/Preloader/Preloader";
import TeamDetails from "../components/TeamDetails/TeamDetails";

const SingleTeam = () => {
  const { id } = useParams();
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams))
      .catch((error) => console.error(error));
  }, [id]);
  if (team.length < 1) {
    return <Preloader />;
  }

  return (
    <>
      {team.map((item) => (
        <TeamDetails key={item.idTeam} {...item} />
      ))}
    </>
  );
};

export default SingleTeam;
