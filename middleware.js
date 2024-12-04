import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

export async function middleware(request) {
  // Check if the request is for an API route
  if (request.url.includes('/api')) {
    // Skip internationalization logic for API routes
    console.debug('No token found, logging in...')

    const username = process.env.DASHBOARD_USER
    const password = process.env.DASHBOARD_PASSWORD
    const endpoint = `${process.env.DASHBOARD_HOST}/api/login/`

    try {
      const authResponse = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (!authResponse.ok) {
        console.error('Authentication failed')
        return new NextResponse(
          JSON.stringify({ error: 'Authentication failed' }),
          { status: 401, headers: { 'Content-Type': 'application/json' } }
        )
      }

      const data = await authResponse.json()
      const token = data.data.token

      const responseWithCookie = NextResponse.next()
      responseWithCookie.cookies.set('Authorization', `Token ${token}`, { httpOnly: true })
      console.debug('Token set:', token)

      responseWithCookie.headers.set('Authorization', `Token ${token}`)
      console.debug('Token added to headers:', token)
      return responseWithCookie

    } catch (error) {
      console.error('Login failed:', error.message)
      return new NextResponse(
        JSON.stringify({ error: 'Authentication error', details: error }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
  }

  // Add internationalization middleware for other routes
  console.debug('Proceeding with internationalization...')
  return createMiddleware(routing)(request)
}

export const config = {
  matcher: ['/', '/(es|en)/:path*', '/api/:path*'],
}
