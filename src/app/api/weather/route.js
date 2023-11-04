export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const lat = searchParams.get('lat')
    const lon = searchParams.get('lon')
    const key = process.env.WEATHER_KEY
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const response = await res.json()

    return Response.json({ response })
}