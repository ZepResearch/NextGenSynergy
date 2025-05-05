import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Row,
    Column,
    Hr,
  } from "@react-email/components"
  import { Tailwind } from "@react-email/tailwind"
  
  
  
  export const ReservationConfirmationEmail = ({
    name = "Attendee",
    email = "attendee@example.com",
    phone = "+1 234 567 8900",
    country = "United States",
    organization = "Tech University",
  }) => {
    return (
      <Html>
        <Head>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
              
              body {
                font-family: 'Inter', sans-serif;
                background-color: #0f172a;
                margin: 0;
                padding: 0;
              }
              
              .gradient-text {
                background: linear-gradient(to right, #22d3ee, #d946ef);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                text-fill-color: transparent;
              }
              
              .neon-border {
                box-shadow: 0 0 15px rgba(139, 92, 246, 0.5), 0 0 30px rgba(34, 211, 238, 0.3);
              }
              
              .neon-glow {
                position: relative;
              }
              
              .neon-glow::before {
                content: "";
                position: absolute;
                top: -2px;
                left: -2px;
                right: -2px;
                bottom: -2px;
                background: linear-gradient(45deg, #22d3ee, #8b5cf6, #d946ef);
                border-radius: 16px;
                z-index: -1;
                filter: blur(10px);
                opacity: 0.7;
              }
              
              .grid-pattern {
                background-image: radial-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px);
                background-size: 20px 20px;
              }
            `}
          </style>
        </Head>
        <Preview>Your seat has been reserved for NextGenSynergy: The Hybrid Interdisciplinary Forum</Preview>
        <Tailwind>
          <Body className="bg-[#0f172a] text-white font-sans grid-pattern">
            {/* Outer container */}
            <Container className="max-w-xl mx-auto my-10">
              {/* Header with logo */}
              <Section className="text-center mb-4">
                <Img
                  src="https://i.ibb.co/4wwVBwpf/Chat-GPT-Image-Apr-19-2025-11-43-56-PM.png"
                  width="180"
                  height="60"
                  alt="NextGenSynergy Logo"
                  className="mx-auto object-contain"
                />
              </Section>
  
              {/* Main content container */}
              <Container className="p-8 bg-[#1a1f35] rounded-2xl shadow-lg border border-purple-500/30 neon-border neon-glow">
                {/* Header */}
                <Section className="text-center">
                  <Heading className="text-2xl font-bold gradient-text">SEAT RESERVATION CONFIRMED</Heading>
                  <Hr className="border-t border-purple-500/30 my-6" />
                </Section>
  
                {/* Greeting */}
                <Section>
                  <Text className="text-xl font-medium text-cyan-300 text-center">Hello, {name}!</Text>
                  <Text className="text-base text-purple-100 mt-4">
                    Thank you for reserving your seat for NextGenSynergy: The Hybrid Interdisciplinary Forum. We're
                    excited to have you join us for this cutting-edge event exploring the future of multidisciplinary
                    research.
                  </Text>
                </Section>
  
                {/* Event details */}
                <Section className="mt-6">
                  <div className="p-6 bg-[#131a2d] rounded-xl border border-purple-400/20">
                    <Text className="text-lg font-medium text-fuchsia-300 mb-4">EVENT DETAILS:</Text>
  
                    <div className="mb-3 p-3 bg-[#1e2642] rounded-lg border-l-4 border-cyan-400">
                      <Text className="text-sm text-cyan-300 uppercase tracking-wider mb-1">Date:</Text>
                      <Text className="text-white">August 21-22, 2025</Text>
                    </div>
  
                    <div className="mb-3 p-3 bg-[#1e2642] rounded-lg border-l-4 border-fuchsia-400">
                      <Text className="text-sm text-fuchsia-300 uppercase tracking-wider mb-1">Location:</Text>
                      <Text className="text-white"> Delhi, India</Text>
                    </div>
  
                    <div className="p-3 bg-[#1e2642] rounded-lg border-l-4 border-purple-400">
                      <Text className="text-sm text-purple-300 uppercase tracking-wider mb-1">Website:</Text>
                      <Link href="https://www.thenextgensynergy.com/" className="text-cyan-400 underline">
                        www.thenextgensynergy.com
                      </Link>
                    </div>
                  </div>
                </Section>
  
                {/* Reservation details */}
                <Section className="mt-8">
                  <div className="p-6 bg-[#131a2d] rounded-xl border border-purple-400/20">
                    <Text className="text-lg font-medium text-cyan-300 mb-4">YOUR INFORMATION:</Text>
  
                    <Row>
                      <Column>
                        <div className="mb-3 p-3 bg-[#1e2642] rounded-lg">
                          <Text className="text-sm text-fuchsia-300 uppercase tracking-wider mb-1">Name:</Text>
                          <Text className="text-white">{name}</Text>
                        </div>
                      </Column>
                    </Row>
  
                    <Row>
                      <Column>
                        <div className="mb-3 p-3 bg-[#1e2642] rounded-lg">
                          <Text className="text-sm text-fuchsia-300 uppercase tracking-wider mb-1">Email:</Text>
                          <Text className="text-white">{email}</Text>
                        </div>
                      </Column>
                    </Row>
  
                    <Row>
                      <Column>
                        <div className="mb-3 p-3 bg-[#1e2642] rounded-lg">
                          <Text className="text-sm text-fuchsia-300 uppercase tracking-wider mb-1">Phone:</Text>
                          <Text className="text-white">{phone}</Text>
                        </div>
                      </Column>
                    </Row>
  
                    <Row>
                      <Column>
                        <div className="mb-3 p-3 bg-[#1e2642] rounded-lg">
                          <Text className="text-sm text-fuchsia-300 uppercase tracking-wider mb-1">Country:</Text>
                          <Text className="text-white">{country}</Text>
                        </div>
                      </Column>
                    </Row>
  
                    <Row>
                      <Column>
                        <div className="p-3 bg-[#1e2642] rounded-lg">
                          <Text className="text-sm text-fuchsia-300 uppercase tracking-wider mb-1">Organization:</Text>
                          <Text className="text-white">{organization}</Text>
                        </div>
                      </Column>
                    </Row>
                  </div>
                </Section>
  
                {/* Next steps */}
                <Section className="mt-8">
                  <div className="p-6 bg-[#131a2d] rounded-xl border border-purple-400/20">
                    <Text className="text-lg font-medium text-fuchsia-300 mb-4">NEXT STEPS:</Text>
                    <Text className="text-purple-100">
                      Our team will contact you shortly with additional information about registration, payment options,
                      and conference materials. In the meantime, please mark the event dates in your calendar.
                    </Text>
                  </div>
                </Section>
  
                {/* CTA */}
                <Section className="mt-8 text-center">
                  <Link
                    href="https://www.thenextgensynergy.com/registration"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white font-medium rounded-lg no-underline inline-block"
                  >
                    COMPLETE YOUR REGISTRATION
                  </Link>
                </Section>
  
                {/* Footer */}
                <Section className="mt-8 text-center">
                  <Hr className="border-t border-purple-500/30 my-6" />
                  <Text className="text-sm text-purple-300 text-center">
                    © 2025 NextGenSynergy: The Hybrid Interdisciplinary Forum
                  </Text>
                  <Text className="text-xs text-purple-400/70 text-center mt-2">
                    If you did not request this reservation, please disregard this email.
                  </Text>
                </Section>
              </Container>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    )
  }
  
  export default ReservationConfirmationEmail
  