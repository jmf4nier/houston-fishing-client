import React, { useState, useEffect } from "react";
import LakeCards from "./LakeCards";
import { Grid } from "@material-ui/core";


const Home = () => {
  const [lakes, setLakes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await fetch("https://jasonserverhoustonfishing.herokuapp.com/lakes")
        .then(res => res.json())
        .then(result => setLakes(result));
    }
    fetchData();
  }, []);
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        {lakes.map(lake => {
          return <LakeCards key={lake._id} lake={lake} />;
        })}
      </Grid>
    </div>
  );
};
export default Home;
