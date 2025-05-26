import {
	BadgeCheck,
	Bell,
	ChevronsUpDown,
	CreditCard,
	LogOut,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Session } from "@/lib/auth/types";

interface NavUserSidebarProps {
	session: Session;
	isMobile: boolean;
	onSignOut: () => Promise<void>;
}

export const NavUserSidebar = (props: NavUserSidebarProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<SidebarMenuButton
					size="lg"
					className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
				>
					<Avatar className="size-8 rounded-lg">
						{props.session.user.image ? (
							<>
								<AvatarImage
									src={props.session.user.image}
									alt={props.session.user.name}
								/>
								<AvatarFallback className="rounded-lg">
									{props.session.user.name.charAt(0).toUpperCase()}
								</AvatarFallback>
							</>
						) : (
							<AvatarFallback className="rounded-lg">
								{props.session.user.name.charAt(0).toUpperCase()}
							</AvatarFallback>
						)}
					</Avatar>
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-semibold">
							{props.session.user.name}
						</span>
						<span className="truncate text-xs">{props.session.user.email}</span>
					</div>
					<ChevronsUpDown className="ml-auto size-4" />
				</SidebarMenuButton>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
				side={props.isMobile ? "bottom" : "right"}
				align="end"
				sideOffset={4}
			>
				<DropdownMenuLabel className="p-0 font-normal">
					<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
						<Avatar className="h-8 w-8 rounded-lg">
							{props.session.user.image ? (
								<>
									<AvatarImage
										src={props.session.user.image}
										alt={props.session.user.name}
									/>
									<AvatarFallback className="rounded-lg">
										{props.session.user.name.charAt(0).toUpperCase()}
									</AvatarFallback>
								</>
							) : (
								<AvatarFallback className="rounded-lg">
									{props.session.user.name.charAt(0).toUpperCase()}
								</AvatarFallback>
							)}
						</Avatar>
						<div className="grid flex-1 text-left text-sm leading-tight">
							<span className="truncate font-semibold">
								{props.session.user.name}
							</span>
							<span className="truncate text-xs">
								{props.session.user.email}
							</span>
						</div>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<BadgeCheck />
						Account
					</DropdownMenuItem>
					<DropdownMenuItem>
						<CreditCard />
						Billing
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Bell />
						Notifications
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={props.onSignOut}>
					<LogOut />
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
