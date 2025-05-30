import { createAuthClient } from "better-auth/react";

import { env } from "@/env";

export const authClient = createAuthClient({
	baseURL: env.NEXT_PUBLIC_APP_URL,
});

export const { signUp, signIn, signOut, useSession } = authClient;

authClient.$store.listen("$sessionSignal", async () => {});
