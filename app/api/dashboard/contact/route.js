// app/api/protected-data/route.js

export async function POST(request) {
  const token = request.headers.get('Authorization')
  const endpoint = `${process.env.DASHBOARD_HOST}/api/contact/`

  // Get post json data
  const body = await request.json()

  // Use the token in your API call
  const apiResponse = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': token, // Automatically added by the middleware
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await apiResponse.json()
  console.debug({ "backend response": apiResponse })
  console.debug({ "backend data": data })
  return new Response(JSON.stringify(data), {
    status: apiResponse.status,
    headers: { 'Content-Type': 'application/json' },
  })
}
