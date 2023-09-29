import { createTRPCRouter } from "~/server/api/trpc";
import { pokemonRouter } from "./routers/pokemon";
import { typeRouter } from "./routers/types";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  pokemon: pokemonRouter,
  types: typeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
