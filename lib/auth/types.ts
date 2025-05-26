import { auth } from "@/lib/auth";

export type Session = typeof auth.$Infer.Session;
export type ErrorCodeAuth = keyof typeof auth.$ERROR_CODES;
