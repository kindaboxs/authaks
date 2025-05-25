"use server";

import { APIError } from "better-auth/api";

import { auth } from "@/lib/auth";
import { signUpSchema, SignUpSchemaType } from "@/schemas/auth-schema";

export const signUpEmailAction = async (data: SignUpSchemaType) => {
	const validated = await signUpSchema.safeParseAsync(data);
	if (!validated.success) return { success: false, error: validated.error };

	const { name, email, password } = validated.data;

	try {
		await auth.api.signUpEmail({
			body: { name, email, password },
		});

		return { success: true, error: null };
	} catch (error) {
		if (error instanceof APIError) {
			return { success: false, error: error.message };
		}

		return { success: false, error: "Internal Server Error" };
	}
};
