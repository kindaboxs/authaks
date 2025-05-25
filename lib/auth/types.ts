import { auth } from "@/lib/auth";

export type ErrorCodeAuth = keyof typeof auth.$ERROR_CODES;
