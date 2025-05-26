import { BoxsLogo } from "@/components/boxs-logo";
import {
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

export const ProtectedSidebarHeader = () => {
	return (
		<SidebarHeader>
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton size="lg" className="cursor-pointer">
						<div className="bg-foreground text-background flex aspect-square size-8 items-center justify-center rounded-lg">
							<BoxsLogo className="size-5" />
						</div>
						<span className="text-2xl font-bold">authaks</span>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarHeader>
	);
};
