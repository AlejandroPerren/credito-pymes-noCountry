import { NextRequest, NextResponse } from 'next/server';

async function handler(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const path = pathname.replace('/api', '');
  const url = `${process.env.BACKEND_URL}${path}${search}`;

  const headers = new Headers();
  const cookie = req.headers.get('cookie');
  console.log('Cookie received by proxy:', cookie);
  if (cookie) {
    headers.set('cookie', cookie);
  }

  Object.entries(req.headers).forEach(([key, value]) => {
    if (key.toLowerCase() !== 'cookie') {
      headers.set(key, value);
    }
  });

  const response = await fetch(url, {
    method: req.method,
    headers,
    body: req.body,
    duplex: 'half',
  } as any);

  const responseHeaders = new Headers(response.headers);

  if (response.headers.has('set-cookie')) {
    responseHeaders.set('set-cookie', response.headers.get('set-cookie') as any);
  }

  return new NextResponse(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  });
}

export { handler as GET, handler as POST, handler as PUT, handler as DELETE, handler as PATCH };