import { CardWrapperAuthFooter } from "@/components/auth/card-wrapper-auth/footer";
import { CardWrapperAuthHeader } from "@/components/auth/card-wrapper-auth/header";
import { Card, CardContent } from "@/components/ui/card";

interface CardWrapperAuthProps {
	children: React.ReactNode;
	signUp?: boolean;
}

export const CardWrapperAuth = ({ children, signUp }: CardWrapperAuthProps) => {
	return (
		<Card className="mx-auto w-full">
			<CardWrapperAuthHeader signUp={signUp} />
			<CardContent>{children}</CardContent>
			<CardWrapperAuthFooter signUp={signUp} />
		</Card>
	);
};
