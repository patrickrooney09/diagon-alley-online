import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users",
  async () =>{
    try{
      const {data} = await axios.get("/api/users")
      return data;
    }catch(error){
      return error.message
    }
  }
);

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState : [],
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(fetchUsers.fulfilled, (state, action)=>{
      return action.payload
    })
  }
})

export default allUsersSlice.reducer;
