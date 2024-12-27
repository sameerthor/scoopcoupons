import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl;

    // Get the hostname
    const hostname = url.hostname;

    // Create a default response
    const response = NextResponse.next();

    // Apply noindex, nofollow for subdomain pages
    if (hostname === 'next.scoopcoupons.com') {
        response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    }

    // Do NOT apply the header for reverse proxy (e.g., test.com)
    return response;
}

export const config = {
    matcher: '/:path*', // Apply middleware to all routes
};
