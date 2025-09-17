import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, company, interest, message } = body

    // For now, just log the form submission
    console.log('Contact form submission:', {
      name,
      email,
      company,
      interest,
      message,
      timestamp: new Date().toISOString()
    })

    // In production, you would:
    // 1. Send email using SendGrid/Resend/etc
    // 2. Save to database
    // 3. Send to CRM
    
    // For development, we'll just return success
    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}