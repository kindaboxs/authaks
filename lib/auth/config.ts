import { BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { APP_NAME } from "@/constants";
import { env } from "@/env";
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
	},
} satisfies BetterAuthOptions;
