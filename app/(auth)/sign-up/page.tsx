import { CardWrapperAuth } from "@/components/auth/card-wrapper-auth";
import { SignUpForm } from "@/components/auth/sign-up-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SignUpPage() {
	return (
		<div className="mt-14 w-full">
			<Tabs defaultValue="sign-up-client" className="mx-auto w-full space-y-4">
				<TabsList className="w-full">
					<TabsTrigger value="sign-up-client" className="cursor-pointer">
						Sign Up Client Side
					</TabsTrigger>
					<TabsTrigger value="sign-up-server" className="cursor-pointer">
						Sign Up Server Side
					</TabsTrigger>
				</TabsList>
				<TabsContent value="sign-up-client">
					<SignUpClientSide />
				</TabsContent>
				<TabsContent value="sign-up-server">
					{/* <SignInServer /> */}
				</TabsContent>
			</Tabs>
		</div>
	);
}

const SignUpClientSide = () => {
	return (
		<CardWrapperAuth signUp>
			<SignUpForm />
		</CardWrapperAuth>
	);
};
