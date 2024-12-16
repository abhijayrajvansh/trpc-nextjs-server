import { trpcRouter } from "@/server/trpc";
import { todoRouter } from "@/server/routers/todo.router";

export const appRouter = trpcRouter({
  todoAPI: todoRouter,
});

export type AppRouter = typeof appRouter;