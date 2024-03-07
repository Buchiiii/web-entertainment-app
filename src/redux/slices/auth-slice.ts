import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  email: string;
  password: string;
}

interface IInitialState {
  user: Partial<User> | null;
  token: string | null;
}

const initialState: IInitialState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setCredentails: (
      state,
      action: PayloadAction<{ user: Partial<User>; token: string }>
    ) => {
        
      const { user, token } = action.payload;
      
      state.user = user;
      state.token = token;
    
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentails, logout } = authSlice.actions;
export default authSlice.reducer;
