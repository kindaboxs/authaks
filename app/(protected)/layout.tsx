import { ProtectedSidebar } from "@/app/(protected)/_components/protected-sidebar";
import { ProtectedSiteHeader } from "@/app/(protected)/_components/protected-site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider>
			<ProtectedSidebar variant="floating" collapsible="icon" />
			<SidebarInset className="m-2 space-y-2 md:space-y-4">
				<ProtectedSiteHeader />
				{/* Main Content */}
				<div className="border-sidebar-border bg-sidebar h-[calc(100dvh-4.5rem)] overflow-y-auto rounded-md border p-4 shadow md:h-[calc(100dvh-5rem)]">
					{children}
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
