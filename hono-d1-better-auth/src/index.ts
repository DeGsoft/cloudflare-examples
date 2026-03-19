import { Hono } from 'hono';
import { auth } from './lib/better-auth';

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get('/', (c) => {
  return c.json({ message: 'Welcome to the Hono + Better Auth + D1 example!' });
});

app.on(['GET', 'POST'], '/api/*', (c) => {
  return auth(c.env).handler(c.req.raw);
});

app.get('/api/user', (c) => {
  return c.json({ message: 'Authorized!' });
});

export default app
