import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const CardWrapperAuthHeader = ({ signUp }: { signUp?: boolean }) => {
	return (
		<CardHeader>
			<CardTitle className="text-2xl">
				{signUp ? "Sign Up" : "Sign In"}
			</CardTitle>
			<CardDescription>
				{signUp ? "Let's get started" : " Welcome back"}
			</CardDescription>
		</CardHeader>
	);
};
