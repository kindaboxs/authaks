import type { Metadata } from "next";

import { geistMono, geistSans } from "@/lib/fonts";

import "@/styles/globals.css";

import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { APP_NAME } from "@/constants";

export const metadata: Metadata = {
	title: {
		template: `%s | ${APP_NAME}`,
		default: APP_NAME,
	},
	description: " a site for learning authentication",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: dark)",
				href: "favicons/logo-dark.svg",
				url: "favicons/logo-dark.svg",
			},
			{
				media: "(prefers-color-scheme: light)",
				href: "favicons/logo-light.svg",
				url: "favicons/logo-light.svg",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
				<Toaster richColors position="top-center" />
			</body>
		</html>
	);
}
