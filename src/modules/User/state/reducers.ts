import { User } from "../models/user.models";
import { UserEmptyState } from "./initialstate";
const createReducer = (state: User, action: { payload: User }) => ({
  ...state,
  ...action.payload,
});

const userReducers = {
  createUser: createReducer,
  modifyUser: createReducer,
  emptyReducer: createReducer,
  emptyReducer1: createReducer,
  emptyReducer2: createReducer,
  emptyReducer3: createReducer,
  emptyReducer4: createReducer,
  emptyReducer5: createReducer,
  emptyReducer6: createReducer,
  emptyReducer7: createReducer,
  emptyReducer8: createReducer,
  resetUser: () => UserEmptyState,
};

export default userReducers;
