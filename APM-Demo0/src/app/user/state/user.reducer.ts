import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

import { User } from "../user";
import * as UserActions from './user.actions';

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null
}

const getUserFeaturesState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeaturesState,
  state => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeaturesState,
  state => state.currentUser
);

export const userReducer = createReducer<UserState>(
initialState,
on(UserActions.maskUserName, (state): UserState => {
  return {
    ...state,
    maskUserName: !state.maskUserName
  };
})
);
