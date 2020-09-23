import { combineReducers } from "redux";

import locationReducer from "./location/location.reducer";

const rootReducer = combineReducers({
  location: locationReducer,
});

export default rootReducer;