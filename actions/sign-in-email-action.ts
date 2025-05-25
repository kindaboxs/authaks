"use server";

import { headers } from "next/headers";

import { APIError } from "better-auth/api";

// import { parseSetCookieHeader } from "better-auth/cookies";

import { auth } from "@/lib/auth";
import { ErrorCodeAuth } from "@/lib/auth/types";
import { signInSchema, SignInSchemaType } from "@/schemas/auth-schema";

export const signInEmailAction = async (data: SignInSchemaType) => {
	const validated = await signInSchema.safeParseAsync(data);
	if (!validated.success) return { success: false, error: validated.error };

	const { email, password } = validated.data;

	try {
		// USE THIS IF THE NEXTCOOKIES IS SET
		await auth.api.signInEmail({
			headers: await headers(),
			body: { email, password },
		});

		// USE THIS IF THE NEXTCOOKIES IS NOT SET
		// const res = await auth.api.signInEmail({
		// 	headers: await headers(),
		// 	body: { email, password },
		// 	asResponse: true,
		// });

		// const setCookieHeader = res.headers.get("set-cookie");

		// if (setCookieHeader) {
		// 	const cookie = parseSetCookieHeader(setCookieHeader);
		// 	const cookieStore = await cookies();

		// 	const [key, cookieAttributes] = [...cookie.entries()][0];
		// 	const value = cookieAttributes.value;
		// 	const maxAge = cookieAttributes["max-age"];
		// 	const path = cookieAttributes.path;
		// 	const httpOnly = cookieAttributes.httponly;
		// 	const sameSite = cookieAttributes.samesite;

		// 	cookieStore.set(key, decodeURIComponent(value), {
		// 		maxAge,
		// 		path,
		// 		httpOnly,
		// 		sameSite,
		// 	});
		// }

		return { success: true, error: null };
	} catch (error) {
		if (error instanceof APIError) {
			const errCode = error.body && (error.body.code as ErrorCodeAuth);

			switch (errCode) {
				default:
					return { success: false, error: error.message };
			}
		}

		return { success: false, error: "Internal Server Error" };
	}
};
