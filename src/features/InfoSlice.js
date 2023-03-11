import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://jawadmirzaassignmentround3-production.up.railway.app";

export const fetchInfo = createAsyncThunk(
  "Info/fetchInfo",
  async (id, dispatch, getState) => {
    return await axios.get(`${baseUrl}/users/${id}`).then((res) => res.data);
  }
);
export const addInfo = createAsyncThunk(
  "Info/addInfo",
  async ({ user_id, value }, dispatch, getState) => {
    console.log("slice  ",user_id)
    return await axios
      .post(`${baseUrl}/users/${user_id}`, value, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);
export const deleteInfo = createAsyncThunk(
  "Info/deleteInfo",
  async (id, dispatch, getState) => {
    return await axios
      .delete(`${baseUrl}/users/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);
export const updateInfo = createAsyncThunk(
  "Info/updateInfo",
  async ({ id, value }, dispatch, getState) => {
    return await axios
      .put(`${baseUrl}/users/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => res.data);
  }
);
const InfoSlice = createSlice({
  name: "Info",
  initialState: {
    Info: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchInfo.pending]: (state, action) => {
      state.status = "Loadingfetch";
    },
    [fetchInfo.fulfilled]: (state, action) => {
      state.status = "success";
      state.Info = action.payload;
    },
    [fetchInfo.rejected]: (state, action) => {
      state.status = "failed";
    },

    [addInfo.pending]: (state, action) => {
      state.status = "LoadingAdd";
    },
    [addInfo.fulfilled]: (state, action) => {
      state.status = "success";
      state.Info.push(action.payload)
    },
    [addInfo.rejected]: (state, action) => {
      state.status = "failed";
    },
    [updateInfo.pending]: (state, action) => {
      state.status = "LoadingUpdate";
    },
    [updateInfo.fulfilled]: (state, action) => {
      state.status = "success";
      state.Info = state.Info.filter((item) => item._id !== action.payload._id);
      state.Info.push(action.payload);
    },
    [updateInfo.rejected]: (state, action) => {
      state.status = "failed";
    },

    [deleteInfo.pending]: (state, action) => {
      state.status = "LoadingDelete";
    },
    [deleteInfo.fulfilled]: (state, action) => {
      state.status = "success";
      state.Info = state.Info.filter((item) => item._id !== action.payload._id);
    },
    [deleteInfo.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export const showList = (state) => state.Info;
export default InfoSlice.reducer;
