import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    // baseURL সরিয়ে দিন অথবা নিচের মতো করে লিখুন
    baseURL: process.env.NEXT_PUBLIC_VERCEL_URL 
             ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` 
             : "http://localhost:3000"
})
