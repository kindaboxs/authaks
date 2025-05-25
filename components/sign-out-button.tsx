"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth/client";

export const SignOutButton = () => {
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	const handleSignOut = async () => {
		await signOut({
			fetchOptions: {
				onRequest: () => {
					setLoading(true);
				},
				onResponse: () => {
					setLoading(false);
				},
				onSuccess: () => {
					setLoading(false);
					router.push("/sign-in");
					toast.success("Sign out successful", { id: "sign-out-success" });
				},
				onError: (ctx) => {
					setLoading(false);
					console.log(ctx);
					toast.error(ctx.error.message, { id: "sign-out-error" });
				},
			},
		});
	};

	return (
		<Button
			variant="destructive"
			size="sm"
			className="cursor-pointer"
			onClick={handleSignOut}
			disabled={loading}
		>
			{loading && <Loader2 className="animate-spin" />}Sign out
		</Button>
	);
};
