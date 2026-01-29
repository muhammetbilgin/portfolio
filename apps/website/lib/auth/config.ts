import type { NextAuthConfig } from 'next-auth';
import Github from 'next-auth/providers/github';

export type User = {
  name: string;
  picture: string;
  sub: string;
  email?: string;
};

/** Auth.js requires a secret; use env in production, fallback only in development. */
const authSecret =
  process.env.AUTH_SECRET ||
  (process.env.NODE_ENV === 'development'
    ? 'dev-secret-min-32-chars-required-by-authjs'
    : undefined);

const authConfig: NextAuthConfig = {
  debug: process.env.NODE_ENV !== 'production',
  secret: authSecret,
  session: {
    strategy: 'jwt',
  },
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      if (session?.user && token.sub) {
        session.user.sub = token.sub;
      }
      return session;
    },
  },
};

export default authConfig;
