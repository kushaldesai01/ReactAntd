import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialStateInterface {
  counter: number;
  user: string | null;
}

const initialState: InitialStateInterface = {
  counter: 0,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
});

export const { increment, decrement, setUser } = authSlice.actions;

export default authSlice.reducer;
