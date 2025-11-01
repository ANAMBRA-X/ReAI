import type { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: string
      provider?: string
    } & DefaultSession["user"]
  }

  interface User {
    role: string
    provider?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string
    id: string
    provider?: string
  }
}
