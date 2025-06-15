import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.includes('.')  // Skip files with extensions (css, js, png, etc.)
  ) {
    return NextResponse.next()
  }

  // Handle locale-prefixed image requests - redirect them to the actual image path
  if (pathname.startsWith('/fr/images/') || pathname.startsWith('/en/images/')) {
    const newUrl = pathname.replace(/^\/(fr|en)\/images\//, '/images/')
    return NextResponse.redirect(new URL(newUrl, request.url))
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = ['en', 'fr'].every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Get the preferred locale from the request headers
    const acceptLanguage = request.headers.get('accept-language') || ''
    const preferredLocale = acceptLanguage.includes('fr') ? 'fr' : 'en'

    // e.g. incoming request is /products
    // The new URL is /en/products
    return NextResponse.redirect(
      new URL(`/${preferredLocale}${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), static files, and API routes
    '/((?!_next/static|_next/image|favicon.ico|images|.*\\..*).*)',
  ],
}