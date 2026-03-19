import { drizzle } from 'drizzle-orm/d1';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { betterAuth, BetterAuthOptions } from 'better-auth';
import { betterAuthOptions } from './options';

/**
 * Better Auth Instance
 */
export const auth = (env: CloudflareBindings): ReturnType<typeof betterAuth> => {
  const db = drizzle(env.myDb);
  const database = drizzleAdapter(db, {
    provider: "sqlite",
  });

  const options: BetterAuthOptions = {
    ...betterAuthOptions,
    database,
    baseURL: env.BETTER_AUTH_URL,
    secret: env.BETTER_AUTH_SECRET
  };

  return betterAuth(options);
};