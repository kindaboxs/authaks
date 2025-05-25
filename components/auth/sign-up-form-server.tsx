"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ZodError } from "zod";

import { signUpEmailAction } from "@/actions/sign-up-email-action";
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
import { signUpSchema, SignUpSchemaType } from "@/schemas/auth-schema";

export const SignUpFormServerSide = () => {
	const [isPending, startTransition] = useTransition();

	const router = useRouter();

	const form = useForm<SignUpSchemaType>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		mode: "all",
	});

	const onSubmit = (data: SignUpSchemaType) => {
		startTransition(() => {
			signUpEmailAction(data).then((res) => {
				if (!res.success) {
					if (res.error instanceof ZodError) {
						toast.error("Sign up failed", {
							id: "sign-up-error",
							description: res.error.message,
						});
					} else {
						toast.error("Sign up failed", {
							id: "sign-up-error",
							description: res.error,
						});
					}
				}

				router.push("/sign-in");
				toast.success("Sign up successful", {
					id: "sign-up-success",
					description: "You can now sign in",
				});
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
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										type="text"
										placeholder="Enter your name"
										autoComplete="name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
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
					{isPending && <Loader2 className="animate-spin" />}Sign Up
				</Button>
			</form>
		</Form>
	);
};
