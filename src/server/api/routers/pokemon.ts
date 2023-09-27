import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const pokemonRouter = createTRPCRouter({
  getPokemon: publicProcedure
    .input(z.string())
    .query(async ({ input, ctx }) => {
      if (input === "") {
        return null;
      }
      const pokemon = await ctx.db.pokemon.findUnique({
        where: {
          name: input,
        },
        include: {
          types: {
            select: {
              name: true,
            },
          },
        },
      });

      if (!pokemon) {
        throw new Error("Pokémon not found");
      }

      return {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types,
        sprite: pokemon.sprite,
      };
    }),

  getAllPokemon: publicProcedure.query(async ({ ctx }) => {
    const pokemon = await ctx.db.pokemon.findMany({
      include: {
        types: {
          select: {
            name: true,
          },
        },
      },
    });

    return pokemon.map((p) => ({
      id: p.id,
      name: p.name,
      types: p.types,
      sprite: p.sprite,
    }));
  }),
  getPokemonArray: publicProcedure
    .input(
      z.object({
        array: z.array(z.string()),
        filter: z.array(z.string()).optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      // Fetch Pokémon data for the array of names
      const whereCondition = {
        name: {
          in: input.array, // Check if the name is in the input array
        },
      };

      if (input.filter && input.filter.length > 0) {
        // @ts-ignore
        whereCondition.types = {
          some: {
            name: {
              in: input.filter,
            },
          },
        };
      }

      const pokemonArray = await ctx.db.pokemon.findMany({
        where: whereCondition,
        include: {
          types: {
            select: {
              name: true,
            },
          },
        },
      });

      return pokemonArray;
    }),
});
