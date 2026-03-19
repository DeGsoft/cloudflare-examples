/**
 * Better Auth CLI configuration file
 *
 * Docs: https://www.better-auth.com/docs/concepts/cli
 */

import { drizzle } from 'drizzle-orm/d1';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { betterAuth, BetterAuthOptions } from 'better-auth';
import { betterAuthOptions } from './src/lib/better-auth/options';

const { myDb, BETTER_AUTH_URL, BETTER_AUTH_SECRET } = process.env;
const db = drizzle(myDb!);

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "sqlite",
    }),
    baseURL: BETTER_AUTH_URL,
    secret: BETTER_AUTH_SECRET
});
