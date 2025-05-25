import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { SignOutButton } from "@/components/sign-out-button";
import { auth } from "@/lib/auth";

export default async function ProfilePage() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) return redirect("/sign-in");

	return (
		<div className="space-y-4 p-4">
			<h1>Profile</h1>
			<SignOutButton />
			<pre className="overflow-clip text-sm">
				{JSON.stringify(session, null, 2)}
			</pre>
		</div>
	);
}
