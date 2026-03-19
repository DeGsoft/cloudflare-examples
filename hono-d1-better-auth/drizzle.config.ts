import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './migrations',
  schema: './src/db/auth-schema.ts',
  dialect: 'sqlite',
});
