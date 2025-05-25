import { CardWrapperAuth } from "@/components/auth/card-wrapper-auth";
import { SignInForm } from "@/components/auth/sign-in-form";
import { SignInFormServerSide } from "@/components/auth/sign-in-form copy";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SignInPage() {
	return (
		<div className="mt-14 w-full">
			<Tabs defaultValue="sign-up-client" className="mx-auto w-full space-y-4">
				<TabsList className="w-full">
					<TabsTrigger value="sign-up-client" className="cursor-pointer">
						Sign In Client Side
					</TabsTrigger>
					<TabsTrigger value="sign-up-server" className="cursor-pointer">
						Sign In Server Side
					</TabsTrigger>
				</TabsList>
				<TabsContent value="sign-up-client">
					<SignInClientSide />
				</TabsContent>
				<TabsContent value="sign-up-server">
					<SignInServerSide />
				</TabsContent>
			</Tabs>
		</div>
	);
}

const SignInClientSide = () => {
	return (
		<CardWrapperAuth>
			<SignInForm />
		</CardWrapperAuth>
	);
};

const SignInServerSide = () => {
	return (
		<CardWrapperAuth>
			<SignInFormServerSide />
		</CardWrapperAuth>
	);
};
