
import { NextRequest, NextResponse } from 'next/server';

async function handler(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const path = pathname.replace('/api', '');
  const url = `${process.env.BACKEND_URL}${path}${search}`;

  const headers = new Headers(req.headers);
  const token = headers.get('Authorization');

  if (token) {
    // Here you can add your logic to decode the token and handle the session
    // For now, we just forward the token
  }

  const response = await fetch(url, {
    method: req.method,
    headers,
    body: req.body,
  });

  return new NextResponse(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}

export { handler as GET, handler as POST, handler as PUT, handler as DELETE, handler as PATCH };
