import { locationTypes } from "./location.types";

const { REACT_APP_MY_API_KEY } = process.env;

export const getLocationId = (location, history) => async (dispatch) => {
  const response = await fetch(
    `https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=EUR&units=km&query=${location}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": `${REACT_APP_MY_API_KEY}`,
      },
    }
  );
  const info = await response.json();
  const { data } = info;

  const { result_object } = data[0];
  const { location_id, name } = result_object;

  history.push(`/location/${location_id}`);

  dispatch({
    type: locationTypes.GET_LOCATION_ID,
    payload: { location_id, name },
  });
};
