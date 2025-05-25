import { BetterAuthOptions } from "better-auth";
import { APIError, createAuthMiddleware } from "better-auth/api";

import { VALID_DOMAINS_EMAIL } from "@/lib/auth/hooks";

export const authActions = {
	hooks: {
		before: createAuthMiddleware(async (ctx) => {
			if (ctx.path === "/sign-up/email") {
				const email = String(ctx.body.email);
				const domain = email.split("@")[1];
				const validDomains = VALID_DOMAINS_EMAIL().includes(domain);

				if (!validDomains) {
					throw new APIError("BAD_REQUEST", {
						code: "BAD_REQUEST",
						message: "Invalid email domain, please use a valid domain",
					});
				}
			}
		}),
	},
} satisfies BetterAuthOptions;
