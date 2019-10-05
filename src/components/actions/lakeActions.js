import { FETCH_LAKES } from "./types";
import { CURRENT_LAKE } from "./types";

export const fetchLakes = () => dispatch => {
  fetch("http://jasonserverhoustonfishing.herokuapp.com/lakes/")
    .then(res => res.json())
    .then(result =>
      dispatch({
        type: FETCH_LAKES,
        payload: result
      })
    );
};
export const currentLake = lake => dispatch => {
  dispatch({
    type: CURRENT_LAKE,
    payload: lake
  });
};
