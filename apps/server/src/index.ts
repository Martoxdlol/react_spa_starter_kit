import { auth } from 'auth-helpers'
import { Hono } from 'hono'

const app = new Hono()
    .get('/api', (c) => {
        return c.json({})
    })

    .route('/api/auth', auth)

Bun.serve({
    fetch: app.fetch,
    port: 3000,
    hostname: '0.0.0.0',
})
