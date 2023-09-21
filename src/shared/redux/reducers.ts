import { pokemonApi } from "@/modules/User/apis";
import { userReducer } from "@/modules/User/state/user";

export const customReducers = {
  [pokemonApi.reducerPath]: pokemonApi.reducer,
};

export const appReducers = {
  User: userReducer,
};



