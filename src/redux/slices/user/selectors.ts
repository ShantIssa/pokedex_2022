import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/types';

export const isUserLoggedIn = createSelector(
    (state: RootState) => state.user,
    (user) => user.loggedIn,
);
