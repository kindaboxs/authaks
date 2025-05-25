import { z } from "zod";

export const signUpSchema = z.object({
	name: z
		.string({ required_error: "Name is required" })
		.min(3, { message: "Name must be at least 3 characters" })
		.max(50, {
			message: "Name must be at most 50 characters",
		}),
	email: z
		.string({ required_error: "Email is required" })
		.email({ message: "Invalid email address" }),
	password: z
		.string({ required_error: "Password is required" })
		.min(6, { message: "Password must be at least 6 characters" })
		.max(50, {
			message: "Password must be at most 50 characters",
		}),
});

export const signInSchema = z.object({
	email: z
		.string({ required_error: "Email is required" })
		.email({ message: "Invalid email address" }),
	password: z
		.string({ required_error: "Password is required" })
		.min(6, { message: "Password must be at least 6 characters" })
		.max(50, {
			message: "Password must be at most 50 characters",
		}),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
export type SignInSchemaType = z.infer<typeof signInSchema>;
