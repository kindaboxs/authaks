import { ProtectedSidebarFooter } from "@/app/(protected)/_components/protected-sidebar-footer";
import { ProtectedSidebarHeader } from "@/app/(protected)/_components/protected-sidebar-header";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

export const ProtectedSidebar = ({
	...props
}: React.ComponentProps<typeof Sidebar>) => {
	return (
		<Sidebar {...props}>
			<ProtectedSidebarHeader />
			<SidebarContent></SidebarContent>
			<ProtectedSidebarFooter />
		</Sidebar>
	);
};
