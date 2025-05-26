"use client";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { NavUserSidebar } from "@/app/(protected)/_components/nav-user-sidebar";
import {
	SidebarFooter,
	SidebarMenu,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { signOut, useSession } from "@/lib/auth/client";

export const ProtectedSidebarFooter = () => {
	const { data: session, isPending } = useSession();
	const { isMobile } = useSidebar();

	const router = useRouter();

	const handleSignOut = async () => {
		await signOut({
			fetchOptions: {
				onError: (ctx) => {
					console.log(ctx);
					toast.error(ctx.error.message, { id: ctx.error.status });
				},
				onSuccess: () => {
					router.push("/sign-in");
					toast.success("Signed out successfully.", { id: "sign-out-success" });
				},
			},
		});
	};

	return (
		<SidebarFooter>
			<SidebarMenu>
				<SidebarMenuItem>
					{isPending ? (
						<Skeleton className="h-12 w-full" />
					) : (
						session && (
							<NavUserSidebar
								session={JSON.parse(JSON.stringify(session))}
								isMobile={isMobile}
								onSignOut={handleSignOut}
							/>
						)
					)}
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarFooter>
	);
};
