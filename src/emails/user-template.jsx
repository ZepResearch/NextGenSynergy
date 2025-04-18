import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
    Img,
    Button,
  } from "@react-email/components"
  import { Tailwind } from "@react-email/tailwind"
  
  
  
  export const UserEmailTemplate = ({ name }) => {
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
              
              .neon-button {
                background: linear-gradient(to right, #8b5cf6, #d946ef);
                color: white;
                font-weight: bold;
                padding: 12px 24px;
                border-radius: 8px;
                text-decoration: none;
                display: inline-block;
                text-align: center;
                box-shadow: 0 0 15px rgba(139, 92, 246, 0.7);
                transition: all 0.3s ease;
              }
              
              .neon-button:hover {
                box-shadow: 0 0 20px rgba(217, 70, 239, 0.9);
              }
              
              .grid-pattern {
                background-image: radial-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px);
                background-size: 20px 20px;
              }
            `}
          </style>
        </Head>
        <Preview>Thank you for contacting NextGenSynergy</Preview>
        <Tailwind>
          <Body className="bg-[#0f172a] text-white font-sans grid-pattern">
            {/* Outer container */}
            <Container className="max-w-xl mx-auto my-10">
              {/* Header with logo */}
              <Section className="text-center mb-4">
                {/* <Img
                  src="https://i.ibb.co/Qp1NKcZ/nextgensynergy-logo.png"
                  width="180"
                  height="60"
                  alt="NextGenSynergy Logo"
                  className="mx-auto"
                /> */}
              </Section>
  
              {/* Main content container */}
              <Container className="p-8 bg-[#1a1f35] rounded-2xl shadow-lg border border-purple-500/30 neon-border neon-glow">
                {/* Header */}
                <Section className="text-center">
                  <Heading className="text-2xl font-bold gradient-text">THANK YOU FOR CONTACTING US</Heading>
                  <Hr className="border-t border-purple-500/30 my-6" />
                </Section>
  
                {/* Greeting */}
                <Section>
                  <Text className="text-xl font-medium text-cyan-300 text-center">Hello, {name}!</Text>
                  <Text className="text-base text-purple-100 mt-4">
                    We've received your message and appreciate your interest in NextGenSynergy: The Virtual
                    Interdisciplinary Forum. Our team will review your inquiry and get back to you as soon as possible.
                  </Text>
                  <Text className="text-base text-purple-100 mt-4">
                    In the meantime, you might find answers to common questions on our FAQ page.
                  </Text>
                </Section>
  
                {/* Event details */}
                <Section className="mt-6">
                  <div className="p-6 bg-[#131a2d] rounded-xl border border-purple-400/20">
                    <Text className="text-lg font-medium text-fuchsia-300 mb-4">EVENT DETAILS:</Text>
  
                    <div className="mb-3 p-3 bg-[#1e2642] rounded-lg border-l-4 border-cyan-400">
                      <Text className="text-sm text-cyan-300 uppercase tracking-wider mb-1">Date:</Text>
                      <Text className="text-white">June 15-17, 2025</Text>
                    </div>
  
                    <div className="mb-3 p-3 bg-[#1e2642] rounded-lg border-l-4 border-fuchsia-400">
                      <Text className="text-sm text-fuchsia-300 uppercase tracking-wider mb-1">Location:</Text>
                      <Text className="text-white">Virtual Platform</Text>
                    </div>
  
                    <div className="p-3 bg-[#1e2642] rounded-lg border-l-4 border-purple-400">
                      <Text className="text-sm text-purple-300 uppercase tracking-wider mb-1">Website:</Text>
                      <Link href="https://www.thenextgensynergy.com" className="text-cyan-400 underline">
                      www.thenextgensynergy.com
                      </Link>
                    </div>
                  </div>
                </Section>
  
                {/* CTA Button */}
                <Section className="mt-8 text-center">
                  <Button href="https://www.thenextgensynergy.com" className="neon-button">
                    EXPLORE OUR FAQ
                  </Button>
                </Section>
  
                {/* Footer */}
                <Section className="mt-8 text-center">
                  <Hr className="border-t border-purple-500/30 my-6" />
                  <Text className="text-sm text-purple-300 text-center">
                    © 2025 NextGenSynergy: The Virtual Interdisciplinary Forum
                  </Text>
                  <Text className="text-xs text-purple-400/70 text-center mt-2">
                    This is an automated response. Please do not reply to this email.
                  </Text>
                </Section>
              </Container>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    )
  }
  
  export default UserEmailTemplate
  