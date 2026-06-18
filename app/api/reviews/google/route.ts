import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey = process.env.GOOGLE_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: 'Google API key or Place ID not configured' },
      { status: 500 }
    )
  }

  try {
    // Legacy Places API — the new Places API is not enabled on this key
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&language=en&key=${apiKey}`

    const response = await fetch(url, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`Google API responded with ${response.status}`)
    }

    const data = await response.json()

    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status} - ${data.error_message || ''}`)
    }

    const result = data.result

    const colors = [
      'bg-teal-600 text-white',
      'bg-blue-700 text-white',
      'bg-amber-600 text-white',
      'bg-orange-600 text-white',
      'bg-green-600 text-white',
      'bg-purple-600 text-white',
      'bg-indigo-600 text-white',
      'bg-rose-500 text-white',
    ]

    const reviews = (result.reviews || []).map((review: any, index: number) => ({
      id: `google-review-${index}`,
      name: review.author_name,
      rating: review.rating,
      date: review.relative_time_description || 'recently',
      text: review.text,
      service: 'Google Review',
      avatarColor: colors[index % colors.length],
      verified: true,
      profilePhoto: review.profile_photo_url || null,
    }))

    return NextResponse.json({
      totalRating: result.rating || 0,
      totalReviews: result.user_ratings_total || 0,
      reviews,
    })
  } catch (error: any) {
    console.error('Failed to fetch Google reviews:', error.message)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
}