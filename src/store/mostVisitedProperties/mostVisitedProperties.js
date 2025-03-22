import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialPropertyState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errMsg: "",
  result: [],
};

const propertySlice = createSlice({
  name: "Property Slice",
  initialState: initialPropertyState,
  reducers: {
    propertyApiRequested(state) {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.errMsg = "";
      state.result = [];
    },
    propertyApiSuccess(state, action) {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.errMsg = "";
      state.result = action.payload;
    },
    propertyApiError(state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errMsg = action.payload;
      state.result = [];
    },
  },
});

export const propertyAction = (id) => {
  return (dispatch, getState) => {
    let url = `https://app.hostizzy.com/api/properties`;
    if (id) {
      url += `${id}`;
    }
    const state = getState();
    if (state.mostVisitedPropertiesReducer.isSuccess) {
      // Data is already in Redux, no need to make the API call again
      return;
    }
    console.log("kjdfg");
    dispatch(propertyActions.propertyApiRequested());
    axios
      .get(url)
      .then((res) => {
        dispatch(propertyActions.propertyApiSuccess(res?.data?.data));
      })
      .catch((err) => {
        dispatch(propertyActions.propertyApiError(err));
      });
  };
};

export const propertyActions = propertySlice.actions;
export default propertySlice.reducer;
