import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Row,
    Column,
    Img,
  } from "@react-email/components"
  import { Tailwind } from "@react-email/tailwind"
  
  
  
  export const AdminEmailTemplate = ({ name, email, subject, message, phoneNumber }) => {
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
            `}
          </style>
        </Head>
        <Preview>New contact form submission from {name}</Preview>
        <Tailwind>
          <Body className="bg-[#0f172a] text-white font-sans">
            {/* Outer container with background pattern */}
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
                  <Heading className="text-2xl font-bold gradient-text">NEW CONTACT FORM SUBMISSION</Heading>
                  <Hr className="border-t border-purple-500/30 my-6" />
                </Section>
  
                {/* Intro text */}
                <Section>
                  <Text className="text-lg font-medium text-cyan-300">
                    You have received a new contact form submission:
                  </Text>
                </Section>
  
                {/* Submission details */}
                <Section className="mt-6 p-6 bg-[#131a2d] rounded-xl border border-purple-400/20">
                  <Row>
                    <Column>
                      {/* Name */}
                      <div className="mb-5 p-4 bg-[#1e2642] rounded-lg border-l-4 border-cyan-400">
                        <Text className="text-sm text-fuchsia-300 mb-1 uppercase tracking-wider">Name:</Text>
                        <Text className="text-base text-white font-medium">{name}</Text>
                      </div>
  
                      {/* Email */}
                      <div className="mb-5 p-4 bg-[#1e2642] rounded-lg border-l-4 border-fuchsia-400">
                        <Text className="text-sm text-cyan-300 mb-1 uppercase tracking-wider">Email:</Text>
                        <Text className="text-base text-white font-medium">{email}</Text>
                      </div>
  
                      {/* Phone Number (if provided) */}
                      {phoneNumber && (
                        <div className="mb-5 p-4 bg-[#1e2642] rounded-lg border-l-4 border-purple-400">
                          <Text className="text-sm text-fuchsia-300 mb-1 uppercase tracking-wider">Phone Number:</Text>
                          <Text className="text-base text-white font-medium">{phoneNumber}</Text>
                        </div>
                      )}
  
                      {/* Subject */}
                      <div className="mb-5 p-4 bg-[#1e2642] rounded-lg border-l-4 border-cyan-400">
                        <Text className="text-sm text-cyan-300 mb-1 uppercase tracking-wider">Subject:</Text>
                        <Text className="text-base text-white font-medium">{subject}</Text>
                      </div>
  
                      {/* Message */}
                      <div className="p-4 bg-[#1e2642] rounded-lg border-l-4 border-fuchsia-400">
                        <Text className="text-sm text-fuchsia-300 mb-1 uppercase tracking-wider">Message:</Text>
                        <Text className="text-base text-white font-medium p-4 bg-[#131a2d] rounded-lg border border-purple-500/20">
                          {message}
                        </Text>
                      </div>
                    </Column>
                  </Row>
                </Section>
  
                {/* Footer */}
                <Section className="mt-8 text-center">
                  <div className="p-4 bg-[#131a2d] rounded-lg border border-purple-500/20">
                    <Text className="text-sm text-cyan-300">RESPOND PROMPTLY TO MAINTAIN ENGAGEMENT</Text>
                  </div>
                  <Hr className="border-t border-purple-500/30 my-6" />
                  <Text className="text-sm text-purple-300 text-center">
                    © 2025 NextGenSynergy: The Virtual Interdisciplinary Forum
                  </Text>
                </Section>
              </Container>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    )
  }
  
  export default AdminEmailTemplate
  