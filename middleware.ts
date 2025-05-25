import { NextRequest, NextResponse } from "next/server";

import { getSessionCookie } from "better-auth/cookies";

const authRoutes = ["/sign-in", "/sign-up"];
const protectedRoutes = ["/profile"];

export async function middleware(req: NextRequest) {
	const { nextUrl } = req;
	const pathname = nextUrl.pathname;

	const isAuthRoute = authRoutes.includes(pathname);
	const isProtectedRoute = protectedRoutes.includes(pathname);

	const sessionCookie = getSessionCookie(req);

	if (isAuthRoute) {
		if (sessionCookie) {
			return NextResponse.redirect(new URL("/", req.url));
		}
		return NextResponse.next();
	}

	if (!sessionCookie && isProtectedRoute) {
		let redirectUrl = pathname;
		if (nextUrl.search) {
			redirectUrl += nextUrl.search;
		}

		const encodedRedirectUrl = encodeURIComponent(redirectUrl);

		return NextResponse.redirect(
			new URL(`/sign-in?redirect_to=${encodedRedirectUrl}`, req.url)
		);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api/|_next/|_static/|_vercel|media/|[\w-]+\.\w+).*)"],
};
