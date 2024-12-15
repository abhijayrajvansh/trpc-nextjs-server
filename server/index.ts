import { trpcProcedure, trpcRouter } from "./trpc";

export const appRouter = trpcRouter({

    greet: trpcProcedure.query(async () => {
        return "welcome mr. rajvansh";
    })


});

export type AppRouter = typeof appRouter;