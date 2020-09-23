import { createSelector } from "reselect";

const selectLocation = (state) => state.location;

export const selectLocationId = createSelector(
  [selectLocation],
  (location) => location
);
