import { NextResponse } from 'next/server';

const pages = ['about', 'experience', 'projects'];

// This function can be marked `async` if using `await` inside
export function middleware(request) {
	if (pages.includes(request.nextUrl.pathname.slice(1))) {
		return NextResponse.rewrite(new URL('/', request.url));
	}
}

// // See "Matching Paths" below to learn more
// export const config = {
// 	matcher: '/:page',
// };
