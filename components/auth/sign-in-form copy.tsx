"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ZodError } from "zod";

import { signInEmailAction } from "@/actions/sign-in-email-action";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInSchema, SignInSchemaType } from "@/schemas/auth-schema";

export const SignInFormServerSide = () => {
	const [isPending, startTransition] = useTransition();

	const router = useRouter();

	const form = useForm<SignInSchemaType>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "all",
	});

	const onSubmit = (data: SignInSchemaType) => {
		startTransition(async () => {
			await signInEmailAction(data).then((res) => {
				if (res.success) {
					router.push("/profile");
					toast.success("Sign in successful", { id: "sign-in-success" });
				} else {
					if (res.error instanceof ZodError) {
						toast.error("Sign in failed", {
							id: "sign-in-error",
							description: res.error.message,
						});
					} else {
						toast.error("Sign in failed", {
							id: "sign-in-error",
							description: res.error,
						});
					}
				}
			});
		});
	};

	return (
		<Form {...form}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit(onSubmit)(e);
				}}
				className="grid gap-6"
			>
				<div className="grid gap-4">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="Enter your email"
										autoComplete="email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input type="password" placeholder="********" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<Button
					type="submit"
					className="w-full cursor-pointer"
					disabled={
						isPending || form.formState.isSubmitting || !form.formState.isValid
					}
				>
					{isPending && <Loader2 className="animate-spin" />}Sign In
				</Button>
			</form>
		</Form>
	);
};
