import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

export default async function ProfilePage() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) return redirect("/sign-in");

	return (
		<div className="space-y-4 p-4">
			<h1>Profile</h1>
			<div className="bg-accent flex flex-col rounded-md">
				<div className="bg-accent-foreground/50 rounded-t-md p-4 font-bold">
					Current Session
				</div>
				<pre className="px-4 py-6 break-all whitespace-pre-wrap">
					{JSON.stringify(session, null, 2)}
				</pre>
			</div>
		</div>
	);
}
