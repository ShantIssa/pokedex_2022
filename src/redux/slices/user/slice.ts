import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Reducer } from 'src/redux/types';

import { UserState } from './types';

const initialUserState: UserState = {
    user: null,
    loggedIn: false,
    submissionError: null,
    status: 'idle',
} as const;

const userSlice = createSlice({
    name: Reducer.USER,
    initialState: initialUserState,
    reducers: {
        setUserLoggedIn(state, action: PayloadAction<boolean>) {
            state.loggedIn = action.payload;
        },
    },
});

export const { setUserLoggedIn } = userSlice.actions;
export default userSlice.reducer;
