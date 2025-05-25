import { BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

import { APP_NAME } from "@/constants";
import { env } from "@/env";
import { hashPassword, verifyPassword } from "@/lib/argon2";
import { db } from "@/lib/db";

export const authConfig = {
	appName: APP_NAME,
	baseURL: env.NEXT_PUBLIC_APP_URL,
	trustedOrigins: [env.NEXT_PUBLIC_APP_URL],
	logger: {
		disabled: process.env.NODE_ENV === "production",
		level: "debug",
	},
	database: prismaAdapter(db, { provider: "postgresql" }),
	emailAndPassword: {
		enabled: true,
		minPasswordLength: 6,
		maxPasswordLength: 50,
		autoSignIn: false,
		password: {
			hash: (password) => hashPassword(password),
			verify: (data) => verifyPassword(data),
		},
	},
	advanced: {
		database: {
			generateId: false,
		},
	},
	session: {
		expiresIn: 60 * 60 * 24 * 3, // 3 days
		updateAge: 60 * 60 * 24, // 1 day
	},
	plugins: [nextCookies()],
} satisfies BetterAuthOptions;
