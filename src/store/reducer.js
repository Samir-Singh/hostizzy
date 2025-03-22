import { combineReducers } from "@reduxjs/toolkit";
import mostVisitedPropertiesReducer from "./mostVisitedProperties/mostVisitedProperties";

export default combineReducers({
  mostVisitedPropertiesReducer: mostVisitedPropertiesReducer,
});
