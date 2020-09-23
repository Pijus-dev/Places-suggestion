import { locationTypes } from "./location.types";

const locationReducer = (state = null, action) => {
  switch (action.type) {
    case locationTypes.GET_LOCATION_ID:
      return action.payload || false;
    default:
      return state;
  }
};
export default locationReducer;
