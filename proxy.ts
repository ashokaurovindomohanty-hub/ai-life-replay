import { NextResponse } from 'next/server'
export default function proxy(req: Request) {
  // check cookie/session verified
  // if not verified -> redirect to /verify
  return NextResponse.next()
}
export const config = { matcher: ['/generate/:path*', '/api/generate/:path*'] }

