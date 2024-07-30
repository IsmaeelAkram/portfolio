import { NextResponse } from 'next/server';

const pages = ['', 'experience', 'projects'];

// This function can be marked `async` if using `await` inside
export function middleware(request) {
	request.headers.set('pathname', request.nextUrl.pathname);
	if (pages.includes(request.nextUrl.pathname.slice(1))) {
		return NextResponse.rewrite(new URL('/', request.url), { headers: request.headers });
	}
}

// // See "Matching Paths" below to learn more
// export const config = {
// 	matcher: '/:page',
// };
