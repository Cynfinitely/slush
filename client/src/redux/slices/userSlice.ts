import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
  } from "@reduxjs/toolkit";
import axios from "axios";
import { User, UsersState } from "../../types";

const baseURL = "http://localhost:5000/api/v1/slush/users";

const initialUserState: UsersState = {
    users: [],
    user: null,
    isLoading: false,
    error: null,
};

export const fetchUsers = createAsyncThunk(
    "users/getUsers",
    async () => {
      const response = await axios.get(baseURL);
      const users = await response.data;
      // console.log(products);
      return users;
    }
  );

export const onLogin = createAsyncThunk(
  "users/login",
  async (loginData:any) => {
    const response = await axios.post('http://localhost:5000/api/v1/slush/login', loginData)
    const user = await response.data.user;
    return user;
  });


export const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
      getUsers: () => {
        console.log("You are Succ!");
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
      });
      builder.addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.isLoading = false;
          state.users = action.payload;
        }
      );
      builder.addCase(onLogin.rejected, (state, action) => {
        state.isLoading = false;
      });
      builder.addCase(onLogin.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(onLogin.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
      });
    },
  });
  
  export const { getUsers } = userSlice.actions;
  export default userSlice.reducer;
  

  