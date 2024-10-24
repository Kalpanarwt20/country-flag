import { createReducer } from "@reduxjs/toolkit";

const dataReducer = createReducer(
  {},
  {
    fetchDataRequest: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.allRegion = action.payload.regions;
    },
    fetchDataError: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.allRegion = action.payload.regions;
    },

    selectedCountryDetailRequest: (state) => {
      state.loading = true;
    },
    selectedCountryDetailSuccess: (state, action) => {
      state.loading = false;
      state.details = action.payload;
    },
    selectedCountryDetailError: (state) => {
      state.loading = false;
      state.details = null;
    },
  }
);

export default dataReducer;
