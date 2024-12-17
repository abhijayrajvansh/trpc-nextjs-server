import { z } from "zod";
import { trpcProcedure, trpcRouter } from "@/server/trpc";

export const todoRouter = trpcRouter({
  getTodos: trpcProcedure
  .query(async () => {
    return [{ id: 1, text: 'Buy milk', done: false }]
  }),

  addTodo: trpcProcedure
  .input(z.object({ id: z.number(), text: z.string(), done: z.boolean()}))
  .mutation(async (opts) => {
    const { input } = opts;
    // todo: call create todo db call here
    return { todo: input };
  })
});
