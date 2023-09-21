import { pokemonApi } from "@/modules/User/apis";

export const customMiddlewares = [
  pokemonApi.middleware,

  // Agrega tus middlewares aquí
];
