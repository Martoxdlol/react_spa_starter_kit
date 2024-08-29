import { Hono } from 'hono'

const app = new Hono()

app.get('/api', (c) => {
    return c.json({})
})

Bun.serve({
    fetch: app.fetch,
    port: 3000,
    hostname: '0.0.0.0',
})
