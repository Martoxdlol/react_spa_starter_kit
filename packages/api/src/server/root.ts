import { protectedProcedure, router } from 'api-helpers'

export const appRouter = router({
    hello: protectedProcedure.query(async () => {
        return 'Hello, world!'
    }),
})

export type AppRouter = typeof appRouter
