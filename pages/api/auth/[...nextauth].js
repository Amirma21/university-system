import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";

const providers = [
  Providers.Credentials({
    id: "credentials",
    name: "credentials",
    authorize: async (credentials) => {
      console.log(credentials)
      const user = await axios
        .post(
          "",
          {
            user: {
              email: credentials.email,
              password: credentials.password,
            },
          },
          {
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
            },
          }
        )
      // const user = {status: 200, data:{name:"name" , token:"fsdgd" , email: "ddgdf@gmi.com", image:"dsfdsf " , role: "andf "}}
      if (user) {
        if (user.status === 200) {
          return Promise.resolve(user.data);
        }
      }

      return Promise.resolve(false)
    },
  }),
];

const callbacks = {
  // async signIn(user, account, profile) { return true },

  // async redirect(url, baseUrl) { return baseUrl },

  async session(session, token) {
    session.role = token.role;
    session.token = token.token;
    return session;
  },

  async jwt(token, user) {
    if (user) {
      token.role = user.role;
      token.token = user.token;
    }

    return token;
  },
};

const pages = {
  signIn: '/Login/login',
  signOut: '/auth/signout',
  error: '/auth/error', // Error code passed in query string as ?error=
  //verifyRequest: '/auth/verify-request', // (used for check email message)
  //newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
};

const cookies = {
  sessionToken: {
    name: `session`,
    options: {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      secure: true,
    },
  },
  callbackUrl: {
    name: `callback-url`,
    options: {
      sameSite: "strict",
      path: "/",
      secure: true,
    },
  },
  csrfToken: {
    name: `csrf`,
    options: {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      secure: true,
    },
  },
  pkceCodeVerifier: {
    name: `pkce.code_verifier`,
    options: {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      secure: true,
    },
  },
};

const session = {
  // Use JSON Web Tokens for session instead of database sessions.
  // This option can be used with or without a database for users/accounts.
  // Note: `jwt` is automatically set to `true` if no database is specified.
  jwt: true,

  // Seconds - How long until an idle session expires and is no longer valid.
  // maxAge: 30 * 24 * 60 * 60, // 30 days

  // Seconds - Throttle how frequently to write to database to extend a session.
  // Use it to limit write operations. Set to 0 to always update the database.
  // Note: This option is ignored if using JSON Web Tokens
  // updateAge: 24 * 60 * 60, // 24 hours
};

const jwt = {
  // A secret to use for key generation (you should set this explicitly)
  //secret: 'll22k5of96kVHdiw50WsDjA2GdjBHYhgthIvFzRymGgMBRr1EFetN9fTz0Elf2i0',
  // Set to true to use encryption (default: false)
  //encryption: true,
  // You can define your own encode/decode functions for signing and encryption
  // if you want to override the default behaviour.
  // encode: async ({ secret, token, maxAge }) => {},
  // decode: async ({ secret, token, maxAge }) => {},
};

const events = {
  //async signIn(message) { /* on successful sign in */ },
  //async signOut(message) { /* on signout */ },
  //async createUser(message) { /* user created */ },
  //async updateUser(message) { /* user updated - e.g. their email was verified */ },
  //async linkAccount(message) { /* account (e.g. Twitter) linked to a user */ },
  //async session(message) { /* session is active */ },
  //async error(message) { },
};

const options = {
  providers,
  secret: "rdZgy4h5U8oTKCG3BZEwbUXvZeaTCoWf9Aq75gZwoTPjO9ubm03VGWC0xgUmZa0S",
  cookies,
  session,
  jwt,
  pages,
  callbacks,
  events,
  theme: "light",
  debug: false,
};

export default (req, res) => NextAuth(req, res, options);
