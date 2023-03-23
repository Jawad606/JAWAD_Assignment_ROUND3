import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://odd-blue-dragonfly-veil.cyclic.app";

export const fetchsales = createAsyncThunk(
  "sales/fetchsales",
  async (dispatch, getState) => {
    return await axios
      .get(`${baseUrl}/sales`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);
export const addsales = createAsyncThunk(
  "sales/addsales",
  async (value, dispatch, getState) => {
    return await axios.post(`${baseUrl}/sales`, value).then((res) => res.data);
  }
);
export const deletesales = createAsyncThunk(
  "sales/deletesales",
  async (id, dispatch, getState) => {
    return await axios
      .delete(`${baseUrl}/sales/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);
export const updatesales = createAsyncThunk(
  "sales/updatesales",
  async ({ id, value }, dispatch, getState) => {
    return await axios
      .put(`${baseUrl}/sales/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);
const SalesSlice = createSlice({
  name: "Sales",
  initialState: {
    sales: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchsales.pending]: (state, action) => {
      state.status = "Loadingfetch";
    },
    [fetchsales.fulfilled]: (state, action) => {
      state.status = "success";
      console.log(action.payload)
      state.sales = action.payload;
    },
    [fetchsales.rejected]: (state, action) => {
      state.status = "failed";
    },

    [addsales.pending]: (state, action) => {
      state.status = "LoadingAdd";
    },
    [addsales.fulfilled]: (state, action) => {
      state.status = "success";
      state.sales = action.payload;
    },
    [addsales.rejected]: (state, action) => {
      state.status = "failed";
    },
    [updatesales.pending]: (state, action) => {
      state.status = "LoadingUpdate";
    },
    [updatesales.fulfilled]: (state, action) => {
      state.status = "success";
      state.sales = state.sales.filter(
        (item) => item._id !== action.payload._id
      );
      state.sales.push(action.payload);
    },
    [updatesales.rejected]: (state, action) => {
      state.status = "failed";
    },

    [deletesales.pending]: (state, action) => {
      state.status = "LoadingDelete";
    },
    [deletesales.fulfilled]: (state, action) => {
      state.status = "success";
      state.sales = state.sales.filter(
        (item) => item._id !== action.payload._id
      );
    },
    [deletesales.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export const showSales = (state) => state.Sales;
export default SalesSlice.reducer;
