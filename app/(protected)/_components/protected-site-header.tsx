import { ThemeToggleMode } from "@/components/theme-mode-toggle";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const ProtectedSiteHeader = () => {
	return (
		<header className="border-sidebar-border bg-sidebar flex h-12 shrink-0 items-center gap-2 rounded-md border px-4 shadow transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
			<SidebarTrigger className="-ml-1 cursor-pointer" />
			<Separator
				orientation="vertical"
				className="mr-2 data-[orientation=vertical]:h-4"
			/>

			<div className="ml-auto">
				<ThemeToggleMode />
			</div>
		</header>
	);
};
