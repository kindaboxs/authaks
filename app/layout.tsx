import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "authaks",
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
			<body>{children}</body>
		</html>
	);
}
