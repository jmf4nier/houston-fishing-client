import React, { useEffect } from "react";

import LakeCards from "./LakeCards";
import { Grid } from "@material-ui/core";
import { fetchLakes } from "../actions/lakeActions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		fetchLakes(dispatch);
	}, [dispatch]);
	const lakes = useSelector(state => state.lakeReducer.lakes);
	const search = useSelector(state => state.searchBarReducer.searchParams);
	const speciesFilter = useSelector(state => state.searchBarReducer.species)
	const searchFilteredCards = lakes.filter(lake => {
		const { name, locality, species } = lake;
		let lowerCaseSpecies = species
		let searchTerm = search.toLowerCase();
		let lowerCaseName = name.toLowerCase();
		if(species.includes())
		return lowerCaseName.includes(searchTerm);
	});
	
	return (
		<div>
			<Grid container direction="row" justify="center" alignItems="center">
				{searchFilteredCards.map(lake => {
					return <LakeCards key={lake._id} lake={lake} />;
				})}
			</Grid>
		</div>
	);
};
export default Home;

// async function fetchData() {
// 	await fetch("https://jasonserverhoustonfishing.herokuapp.com/lakes")
// 		.then(res => res.json())
// 		.then(result => {
// 			dispatch({ type: FETCH_LAKES, payload: result });
// 			setLakes(result);
// 		});
// }
// fetchData();
