import { NextResponse } from "next/server"
import { Resend } from "resend"
import ReservationConfirmationEmail from "@/emails/reservation-confirmation"

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail = process.env.FROM_EMAIL || "info@nextgensynergy.com"
const adminEmail = process.env.ADMIN_EMAIL || "admin@nextgensynergy.com"

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, country, organization } = body

    // Validate required fields
    if (!name || !email || !phone || !country || !organization) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Your Seat Reservation for NextGenSynergy",
      react: ReservationConfirmationEmail({
        name,
        email,
        phone,
        country,
        organization,
      }),
    })

    // Send notification email to admin
    await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: "New Seat Reservation: NextGenSynergy",
      react: ReservationConfirmationEmail({
        name,
        email,
        phone,
        country,
        organization,
      }),
    })

    return NextResponse.json({ success: true, message: "Reservation successful" }, { status: 200 })
  } catch (error) {
    console.error("Reservation error:", error)
    return NextResponse.json({ error: "Failed to process reservation" }, { status: 500 })
  }
}
