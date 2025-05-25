export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-dvh flex flex-col items-center justify-center">
			<main className="container max-w-xl flex-1 p-4">{children}</main>
		</div>
	);
}
