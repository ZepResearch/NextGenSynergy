// 1. about-conference

export const aboutConferenceMetadata = {
    title: "About Conference | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Learn about NextGenSynergy, the premier virtual interdisciplinary forum connecting researchers, professionals, and innovators across diverse fields and disciplines.",
    keywords: [
      "NextGenSynergy",
      "virtual conference",
      "interdisciplinary forum",
      "academic conference",
      "professional networking",
      "knowledge exchange",
      "innovation forum",
    ],
  
    // Open Graph / Facebook
    openGraph: {
      type: "website",
      url: "https://www.nextgensynergy.com/about-conference",
      title: "About Conference | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Learn about NextGenSynergy, the premier virtual interdisciplinary forum connecting researchers, professionals, and innovators across diverse fields and disciplines.",
      siteName: "NextGenSynergy",
      images: [
        {
          url: "https://www.nextgensynergy.com/opengraph.png",
          width: 1200,
          height: 630,
          alt: "NextGenSynergy Conference Overview",
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: "About Conference | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Learn about NextGenSynergy, the premier virtual interdisciplinary forum connecting researchers, professionals, and innovators across diverse fields and disciplines.",
      images: ["https://www.nextgensynergy.com/opengraph.png"],
    },
  
    // Canonical URL
    alternates: {
      canonical: "https://www.nextgensynergy.com/about-conference",
    },
  
    // Structured data
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "About Conference | NextGenSynergy: The Virtual Interdisciplinary Forum",
        description:
          "Learn about NextGenSynergy, the premier virtual interdisciplinary forum connecting researchers, professionals, and innovators across diverse fields and disciplines.",
        url: "https://www.nextgensynergy.com/about-conference",
        mainEntity: {
          "@type": "Event",
          name: "NextGenSynergy Conference",
          description: "The Virtual Interdisciplinary Forum",
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
          location: {
            "@type": "VirtualLocation",
            url: "https://www.nextgensynergy.com",
          },
          organizer: {
            "@type": "Organization",
            name: "NextGenSynergy",
            url: "https://www.nextgensynergy.com",
          },
        },
      }),
    },
  };
  
  // 2. about-organizers
  
  export const aboutOrganizersMetadata = {
    title: "About Organizers | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Meet the team behind NextGenSynergy. Learn about our organizing committee, their expertise, vision, and commitment to fostering interdisciplinary collaboration and innovation.",
    keywords: [
      "NextGenSynergy organizers",
      "conference committee",
      "event leadership",
      "interdisciplinary experts",
      "conference directors",
      "academic organizers",
      "virtual conference team"
    ],
  
    // Open Graph / Facebook
    openGraph: {
      type: "website",
      url: "https://www.nextgensynergy.com/about-organizers",
      title: "About Organizers | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Meet the team behind NextGenSynergy. Learn about our organizing committee, their expertise, vision, and commitment to fostering interdisciplinary collaboration and innovation.",
      siteName: "NextGenSynergy",
      images: [
        {
          url: "https://www.nextgensynergy.com/opengraph.png",
          width: 1200,
          height: 630,
          alt: "NextGenSynergy Conference Organizers",
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: "About Organizers | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Meet the team behind NextGenSynergy. Learn about our organizing committee, their expertise, vision, and commitment to fostering interdisciplinary collaboration and innovation.",
      images: ["https://www.nextgensynergy.com/opengraph.png"],
    },
  
    // Canonical URL
    alternates: {
      canonical: "https://www.nextgensynergy.com/about-organizers",
    },
  
    // Structured data
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "About Organizers | NextGenSynergy: The Virtual Interdisciplinary Forum",
        description:
          "Meet the team behind NextGenSynergy. Learn about our organizing committee, their expertise, vision, and commitment to fostering interdisciplinary collaboration and innovation.",
        url: "https://www.nextgensynergy.com/about-organizers",
        mainEntity: {
          "@type": "Organization",
          name: "NextGenSynergy Conference Organizers",
          description: "The organizing committee of the NextGenSynergy Virtual Interdisciplinary Forum",
          url: "https://www.nextgensynergy.com/about-organizers",
        },
      }),
    },
  };
  
  // 3. awards
  
  export const awardsMetadata = {
    title: "Conference Awards | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Discover the prestigious awards and recognition opportunities at NextGenSynergy. Learn about award categories, eligibility criteria, evaluation process, and previous winners.",
    keywords: [
      "NextGenSynergy awards",
      "conference recognition",
      "academic awards",
      "research excellence",
      "best presentation",
      "outstanding paper",
      "innovation awards",
      "interdisciplinary achievements"
    ],
  
    // Open Graph / Facebook
    openGraph: {
      type: "website",
      url: "https://www.nextgensynergy.com/awards",
      title: "Conference Awards | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Discover the prestigious awards and recognition opportunities at NextGenSynergy. Learn about award categories, eligibility criteria, evaluation process, and previous winners.",
      siteName: "NextGenSynergy",
      images: [
        {
          url: "https://www.nextgensynergy.com/opengraph.png",
          width: 1200,
          height: 630,
          alt: "NextGenSynergy Conference Awards",
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: "Conference Awards | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Discover the prestigious awards and recognition opportunities at NextGenSynergy. Learn about award categories, eligibility criteria, evaluation process, and previous winners.",
      images: ["https://www.nextgensynergy.com/opengraph.png"],
    },
  
    // Canonical URL
    alternates: {
      canonical: "https://www.nextgensynergy.com/awards",
    },
  
    // Structured data
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Conference Awards | NextGenSynergy: The Virtual Interdisciplinary Forum",
        description:
          "Discover the prestigious awards and recognition opportunities at NextGenSynergy. Learn about award categories, eligibility criteria, evaluation process, and previous winners.",
        url: "https://www.nextgensynergy.com/awards",
        mainEntity: {
          "@type": "ItemList",
          name: "NextGenSynergy Conference Awards",
          description: "Awards and recognition at the NextGenSynergy Virtual Interdisciplinary Forum",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Best Research Presentation Award"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Outstanding Innovation Award"
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Emerging Scholar Recognition"
            }
          ]
        },
      }),
    },
  };
  
  // 4. committee
  
  export const committeeMetadata = {
    title: "Program Committee | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Meet our distinguished program committee members who review submissions, chair sessions, and ensure the highest quality content at NextGenSynergy. Learn about their expertise and contributions.",
    keywords: [
      "NextGenSynergy committee",
      "program committee",
      "scientific committee",
      "peer reviewers",
      "session chairs",
      "expert panel",
      "academic committee",
      "conference organizing team"
    ],
  
    // Open Graph / Facebook
    openGraph: {
      type: "website",
      url: "https://www.nextgensynergy.com/committee",
      title: "Program Committee | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Meet our distinguished program committee members who review submissions, chair sessions, and ensure the highest quality content at NextGenSynergy. Learn about their expertise and contributions.",
      siteName: "NextGenSynergy",
      images: [
        {
          url: "https://www.nextgensynergy.com/opengraph.png",
          width: 1200,
          height: 630,
          alt: "NextGenSynergy Program Committee",
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: "Program Committee | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Meet our distinguished program committee members who review submissions, chair sessions, and ensure the highest quality content at NextGenSynergy. Learn about their expertise and contributions.",
      images: ["https://www.nextgensynergy.com/opengraph.png"],
    },
  
    // Canonical URL
    alternates: {
      canonical: "https://www.nextgensynergy.com/committee",
    },
  
    // Structured data
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Program Committee | NextGenSynergy: The Virtual Interdisciplinary Forum",
        description:
          "Meet our distinguished program committee members who review submissions, chair sessions, and ensure the highest quality content at NextGenSynergy. Learn about their expertise and contributions.",
        url: "https://www.nextgensynergy.com/committee",
        mainEntity: {
          "@type": "Organization",
          name: "NextGenSynergy Program Committee",
          description: "The scientific and program committee of the NextGenSynergy Virtual Interdisciplinary Forum",
          url: "https://www.nextgensynergy.com/committee",
        },
      }),
    },
  };
  
  // 5. contact
  
  export const contactMetadata = {
    title: "Contact Us | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Get in touch with the NextGenSynergy team. Find contact information for general inquiries, submission questions, technical support, and sponsorship opportunities.",
    keywords: [
      "NextGenSynergy contact",
      "conference support",
      "event inquiries",
      "technical assistance",
      "submission help",
      "contact organizers",
      "conference questions",
      "help center"
    ],
  
    // Open Graph / Facebook
    openGraph: {
      type: "website",
      url: "https://www.nextgensynergy.com/contact",
      title: "Contact Us | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Get in touch with the NextGenSynergy team. Find contact information for general inquiries, submission questions, technical support, and sponsorship opportunities.",
      siteName: "NextGenSynergy",
      images: [
        {
          url: "https://www.nextgensynergy.com/opengraph.png",
          width: 1200,
          height: 630,
          alt: "NextGenSynergy Contact Information",
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: "Contact Us | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Get in touch with the NextGenSynergy team. Find contact information for general inquiries, submission questions, technical support, and sponsorship opportunities.",
      images: ["https://www.nextgensynergy.com/opengraph.png"],
    },
  
    // Canonical URL
    alternates: {
      canonical: "https://www.nextgensynergy.com/contact",
    },
  
    // Structured data
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Us | NextGenSynergy: The Virtual Interdisciplinary Forum",
        description:
          "Get in touch with the NextGenSynergy team. Find contact information for general inquiries, submission questions, technical support, and sponsorship opportunities.",
        url: "https://www.nextgensynergy.com/contact",
        mainEntity: {
          "@type": "Organization",
          name: "NextGenSynergy",
          url: "https://www.nextgensynergy.com",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-123-4567",
            email: "info@nextgensynergy.com",
            contactType: "customer service"
          }
        },
      }),
    },
  };
  
  // 6. exhibit-and-sponsor
  
  export const exhibitSponsorMetadata = {
    title: "Exhibit & Sponsorship | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Discover sponsorship and exhibition opportunities at NextGenSynergy. Learn about packages, benefits, visibility options, and how to showcase your organization to our diverse audience.",
    keywords: [
      "NextGenSynergy sponsors",
      "conference exhibition",
      "sponsorship packages",
      "virtual exhibit",
      "academic sponsorship",
      "brand visibility",
      "conference partners",
      "event sponsorship"
    ],
  
    // Open Graph / Facebook
    openGraph: {
      type: "website",
      url: "https://www.nextgensynergy.com/exhibit-and-sponsor",
      title: "Exhibit & Sponsorship | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Discover sponsorship and exhibition opportunities at NextGenSynergy. Learn about packages, benefits, visibility options, and how to showcase your organization to our diverse audience.",
      siteName: "NextGenSynergy",
      images: [
        {
          url: "https://www.nextgensynergy.com/opengraph.png",
          width: 1200,
          height: 630,
          alt: "NextGenSynergy Sponsorship Opportunities",
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: "Exhibit & Sponsorship | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Discover sponsorship and exhibition opportunities at NextGenSynergy. Learn about packages, benefits, visibility options, and how to showcase your organization to our diverse audience.",
      images: ["https://www.nextgensynergy.com/opengraph.png"],
    },
  
    // Canonical URL
    alternates: {
      canonical: "https://www.nextgensynergy.com/exhibit-and-sponsor",
    },
  
    // Structured data
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Exhibit & Sponsorship | NextGenSynergy: The Virtual Interdisciplinary Forum",
        description:
          "Discover sponsorship and exhibition opportunities at NextGenSynergy. Learn about packages, benefits, visibility options, and how to showcase your organization to our diverse audience.",
        url: "https://www.nextgensynergy.com/exhibit-and-sponsor",
        mainEntity: {
          "@type": "Service",
          name: "NextGenSynergy Sponsorship Program",
          description: "Exhibition and sponsorship opportunities at the NextGenSynergy Virtual Interdisciplinary Forum",
          provider: {
            "@type": "Organization",
            name: "NextGenSynergy",
            url: "https://www.nextgensynergy.com"
          },
          offers: {
            "@type": "AggregateOffer",
            highPrice: "5000",
            lowPrice: "500",
            priceCurrency: "USD",
            offerCount: "4"
          }
        },
      }),
    },
  };
  
  // 7. journals
  
  export const journalsMetadata = {
    title: "Associated Journals | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Explore journal publication opportunities associated with NextGenSynergy. Learn about special issues, submission guidelines, and how to publish your conference paper in partner journals.",
    keywords: [
      "NextGenSynergy journals",
      "conference publications",
      "special issues",
      "research publication",
      "academic journals",
      "proceedings publication",
      "peer-reviewed journals",
      "indexed publications"
    ],
  
    // Open Graph / Facebook
    openGraph: {
      type: "website",
      url: "https://www.nextgensynergy.com/journals",
      title: "Associated Journals | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Explore journal publication opportunities associated with NextGenSynergy. Learn about special issues, submission guidelines, and how to publish your conference paper in partner journals.",
      siteName: "NextGenSynergy",
      images: [
        {
          url: "https://www.nextgensynergy.com/opengraph.png",
          width: 1200,
          height: 630,
          alt: "NextGenSynergy Associated Journals",
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: "Associated Journals | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Explore journal publication opportunities associated with NextGenSynergy. Learn about special issues, submission guidelines, and how to publish your conference paper in partner journals.",
      images: ["https://www.nextgensynergy.com/opengraph.png"],
    },
  
    // Canonical URL
    alternates: {
      canonical: "https://www.nextgensynergy.com/journals",
    },
  
    // Structured data
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Associated Journals | NextGenSynergy: The Virtual Interdisciplinary Forum",
        description:
          "Explore journal publication opportunities associated with NextGenSynergy. Learn about special issues, submission guidelines, and how to publish your conference paper in partner journals.",
        url: "https://www.nextgensynergy.com/journals",
        mainEntity: {
          "@type": "ItemList",
          name: "NextGenSynergy Associated Journals",
          description: "Partner journals for publishing NextGenSynergy conference papers",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Journal of Interdisciplinary Studies"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Advances in Next Generation Research"
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "International Journal of Synergy"
            }
          ]
        },
      }),
    },
  };
  
  // 8. mode-of-presentation
  
  export const presentationModeMetadata = {
    title: "Presentation Modes | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Understand the different presentation formats available at NextGenSynergy. Learn about oral presentations, poster sessions, workshops, panel discussions, and technical requirements.",
    keywords: [
      "NextGenSynergy presentations",
      "virtual presentation",
      "oral presentation",
      "poster session",
      "workshop format",
      "panel discussion",
      "presentation guidelines",
      "technical requirements"
    ],
  
    // Open Graph / Facebook
    openGraph: {
      type: "website",
      url: "https://www.nextgensynergy.com/mode-of-presentation",
      title: "Presentation Modes | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Understand the different presentation formats available at NextGenSynergy. Learn about oral presentations, poster sessions, workshops, panel discussions, and technical requirements.",
      siteName: "NextGenSynergy",
      images: [
        {
          url: "https://www.nextgensynergy.com/opengraph.png",
          width: 1200,
          height: 630,
          alt: "NextGenSynergy Presentation Formats",
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: "Presentation Modes | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Understand the different presentation formats available at NextGenSynergy. Learn about oral presentations, poster sessions, workshops, panel discussions, and technical requirements.",
      images: ["https://www.nextgensynergy.com/opengraph.png"],
    },
  
    // Canonical URL
    alternates: {
      canonical: "https://www.nextgensynergy.com/mode-of-presentation",
    },
  
    // Structured data
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Presentation Modes | NextGenSynergy: The Virtual Interdisciplinary Forum",
        description:
          "Understand the different presentation formats available at NextGenSynergy. Learn about oral presentations, poster sessions, workshops, panel discussions, and technical requirements.",
        url: "https://www.nextgensynergy.com/mode-of-presentation",
        mainEntity: {
          "@type": "ItemList",
          name: "NextGenSynergy Presentation Formats",
          description: "Available presentation modes at the NextGenSynergy Virtual Interdisciplinary Forum",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Oral Presentations"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Poster Sessions"
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Interactive Workshops"
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Panel Discussions"
            }
          ]
        },
      }),
    },
  };
  
  // 9. papers-format
  
  export const papersFormatMetadata = {
    title: "Paper Format Guidelines | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Access detailed formatting guidelines for NextGenSynergy submissions. Learn about paper structure, length requirements, citation style, figure formatting, and submission process.",
    keywords: [
      "NextGenSynergy paper format",
      "submission guidelines",
      "paper template",
      "academic formatting",
      "citation style",
      "manuscript preparation",
      "conference submission",
      "author guidelines"
    ],
  
    // Open Graph / Facebook
    openGraph: {
      type: "website",
      url: "https://www.nextgensynergy.com/papers-format",
      title: "Paper Format Guidelines | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Access detailed formatting guidelines for NextGenSynergy submissions. Learn about paper structure, length requirements, citation style, figure formatting, and submission process.",
      siteName: "NextGenSynergy",
      images: [
        {
          url: "https://www.nextgensynergy.com/opengraph.png",
          width: 1200,
          height: 630,
          alt: "NextGenSynergy Paper Format Guidelines",
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: "Paper Format Guidelines | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Access detailed formatting guidelines for NextGenSynergy submissions. Learn about paper structure, length requirements, citation style, figure formatting, and submission process.",
      images: ["https://www.nextgensynergy.com/opengraph.png"],
    },
  
    // Canonical URL
    alternates: {
      canonical: "https://www.nextgensynergy.com/papers-format",
    },
  
    // Structured data
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Paper Format Guidelines | NextGenSynergy: The Virtual Interdisciplinary Forum",
        description:
          "Access detailed formatting guidelines for NextGenSynergy submissions. Learn about paper structure, length requirements, citation style, figure formatting, and submission process.",
        url: "https://www.nextgensynergy.com/papers-format",
        mainEntity: {
          "@type": "HowTo",
          name: "NextGenSynergy Paper Formatting Guidelines",
          description: "Step-by-step instructions for formatting your paper submission",
          step: [
            {
              "@type": "HowToStep",
              name: "Document Setup",
              text: "Set up your document with appropriate margins, font, and spacing"
            },
            {
              "@type": "HowToStep",
              name: "Paper Structure",
              text: "Organize your paper with the required sections"
            },
            {
              "@type": "HowToStep",
              name: "Citations and References",
              text: "Format citations and references according to the required style"
            },
            {
              "@type": "HowToStep",
              name: "Submit Document",
              text: "Convert to PDF and submit through the conference system"
            }
          ]
        },
      }),
    },
  };
  
  // 10. payment
  
  export const paymentMetadataSuccess = {
    title: "Payment Successfull  | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Find detailed Successfull payment information for NextGenSynergy registration. Learn about payment methods, invoicing, receipts, taxes, group discounts, and financial assistance options.",
    keywords: [
      "NextGenSynergy payment",
      "conference fees",
      "registration payment",
      "payment methods",
      "online payment",
      "invoice request",
      "payment receipt",
      "financial assistance"
    ],
  
    // Open Graph / Facebook
    openGraph: {
      type: "website",
      url: "https://www.nextgensynergy.com/success",
      title: "Payment Information | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Find detailed payment information for NextGenSynergy registration. Learn about payment methods, invoicing, receipts, taxes, group discounts, and financial assistance options.",
      siteName: "NextGenSynergy",
      images: [
        {
          url: "https://www.nextgensynergy.com/opengraph.png",
          width: 1200,
          height: 630,
          alt: "NextGenSynergy Payment Information",
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: "Payment Information | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Find detailed payment information for NextGenSynergy registration. Learn about payment methods, invoicing, receipts, taxes, group discounts, and financial assistance options.",
      images: ["https://www.nextgensynergy.com/opengraph.png"],
    },
  
    // Canonical URL
    alternates: {
      canonical: "https://www.nextgensynergy.com/success",
    },
  
    // Structured data
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Payment Information | NextGenSynergy: The Virtual Interdisciplinary Forum",
        description:
          "Find detailed payment information for NextGenSynergy registration. Learn about payment methods, invoicing, receipts, taxes, group discounts, and financial assistance options.",
        url: "https://www.nextgensynergy.com/success",
        mainEntity: {
          "@type": "Service",
          name: "NextGenSynergy Registration Payment",
          description: "Payment processing for conference registration",
          provider: {
            "@type": "Organization",
            name: "NextGenSynergy",
            url: "https://www.nextgensynergy.com"
          },
          offers: {
            "@type": "AggregateOffer",
            highPrice: "599",
            lowPrice: "199",
            priceCurrency: "USD",
            offerCount: "4"
          }
        },
      }),
    },
  };
  export const paymentMetadataFailed = {
    title: "Failed Payment  | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Find detailed Failed payment information for NextGenSynergy registration. Learn about payment methods, invoicing, receipts, taxes, group discounts, and financial assistance options.",
    keywords: [
      "NextGenSynergy payment",
      "conference fees",
      "registration payment",
      "payment methods",
      "online payment",
      "invoice request",
      "payment receipt",
      "financial assistance"
    ],
  
    // Open Graph / Facebook
    openGraph: {
      type: "website",
      url: "https://www.nextgensynergy.com/failed",
      title: "Payment Information | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Find detailed payment information for NextGenSynergy registration. Learn about payment methods, invoicing, receipts, taxes, group discounts, and financial assistance options.",
      siteName: "NextGenSynergy",
      images: [
        {
          url: "https://www.nextgensynergy.com/opengraph.png",
          width: 1200,
          height: 630,
          alt: "NextGenSynergy Payment Information",
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: "Payment Information | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Find detailed payment information for NextGenSynergy registration. Learn about payment methods, invoicing, receipts, taxes, group discounts, and financial assistance options.",
      images: ["https://www.nextgensynergy.com/opengraph.png"],
    },
  
    // Canonical URL
    alternates: {
      canonical: "https://www.nextgensynergy.com/failed",
    },
  
    // Structured data
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Payment Information | NextGenSynergy: The Virtual Interdisciplinary Forum",
        description:
          "Find detailed payment information for NextGenSynergy registration. Learn about payment methods, invoicing, receipts, taxes, group discounts, and financial assistance options.",
        url: "https://www.nextgensynergy.com/failed",
        mainEntity: {
          "@type": "Service",
          name: "NextGenSynergy Registration Payment",
          description: "Payment processing for conference registration",
          provider: {
            "@type": "Organization",
            name: "NextGenSynergy",
            url: "https://www.nextgensynergy.com"
          },
          offers: {
            "@type": "AggregateOffer",
            highPrice: "599",
            lowPrice: "199",
            priceCurrency: "USD",
            offerCount: "4"
          }
        },
      }),
    },
  };
  // 11. registration
  
  export const registrationMetadata = {
    title: "Registration | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Register for NextGenSynergy, the premier virtual interdisciplinary forum. Learn about registration categories, early bird rates, included benefits, and the registration process.",
    keywords: [
      "NextGenSynergy registration",
      "conference signup",
      "event registration",
      "early bird rates",
      "attendee registration",
      "presenter registration",
      "virtual conference access",
      "registration benefits"
    ],
  
    // Open Graph / Facebook
    openGraph: {
      type: "website",
      url: "https://www.nextgensynergy.com/registration",
      title: "Registration | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Register for NextGenSynergy, the premier virtual interdisciplinary forum. Learn about registration categories, early bird rates, included benefits, and the registration process.",
      siteName: "NextGenSynergy",
      images: [
        {
          url: "https://www.nextgensynergy.com/opengraph.png",
          width: 1200,
          height: 630,
          alt: "NextGenSynergy Registration",
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: "Registration | NextGenSynergy: The Virtual Interdisciplinary Forum",
      description:
        "Register for NextGenSynergy, the premier virtual interdisciplinary forum. Learn about registration categories, early bird rates, included benefits, and the registration process.",
      images: ["https://www.nextgensynergy.com/opengraph.png"],
    },
  
    // Canonical URL
    alternates: {
      canonical: "https://www.nextgensynergy.com/registration",
    },
  
    // Structured data
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Registration | NextGenSynergy: The Virtual Interdisciplinary Forum",
        description:
          "Register for NextGenSynergy, the premier virtual interdisciplinary forum. Learn about registration categories, early bird rates, included benefits, and the registration process.",
        url: "https://www.nextgensynergy.com/registration",
        mainEntity: {
          "@type": "Service",
          name: "NextGenSynergy Registration",
          description: "Registration for the NextGenSynergy Virtual Interdisciplinary Forum",
          provider: {
            "@type": "Organization",
            name: "NextGenSynergy",
            url: "https://www.nextgensynergy.com"
          },
       // Continuing from registration metadata...

       offers: {
        "@type": "AggregateOffer",
        highPrice: "599",
        lowPrice: "199",
        priceCurrency: "USD",
        offerCount: "4"
      }
    },
  }),
},
};

// 12. schedule

export const scheduleMetadata = {
title: "Conference Schedule | NextGenSynergy: The Virtual Interdisciplinary Forum",
description:
  "View the complete schedule for NextGenSynergy. Explore keynote sessions, presentations, workshops, networking events, and plan your participation in this virtual interdisciplinary forum.",
keywords: [
  "NextGenSynergy schedule",
  "conference program",
  "event timetable",
  "keynote sessions",
  "presentation schedule",
  "workshop times",
  "session planner",
  "virtual conference agenda"
],

// Open Graph / Facebook
openGraph: {
  type: "website",
  url: "https://www.nextgensynergy.com/schedule",
  title: "Conference Schedule | NextGenSynergy: The Virtual Interdisciplinary Forum",
  description:
    "View the complete schedule for NextGenSynergy. Explore keynote sessions, presentations, workshops, networking events, and plan your participation in this virtual interdisciplinary forum.",
  siteName: "NextGenSynergy",
  images: [
    {
      url: "https://www.nextgensynergy.com/opengraph.png",
      width: 1200,
      height: 630,
      alt: "NextGenSynergy Conference Schedule",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "Conference Schedule | NextGenSynergy: The Virtual Interdisciplinary Forum",
  description:
    "View the complete schedule for NextGenSynergy. Explore keynote sessions, presentations, workshops, networking events, and plan your participation in this virtual interdisciplinary forum.",
  images: ["https://www.nextgensynergy.com/opengraph.png"],
},

// Canonical URL
alternates: {
  canonical: "https://www.nextgensynergy.com/schedule",
},

// Structured data
other: {
  "application/ld+json": JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Conference Schedule | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "View the complete schedule for NextGenSynergy. Explore keynote sessions, presentations, workshops, networking events, and plan your participation in this virtual interdisciplinary forum.",
    url: "https://www.nextgensynergy.com/schedule",
    mainEntity: {
      "@type": "Schedule",
      name: "NextGenSynergy Conference Program",
      description: "Complete schedule of events for the NextGenSynergy Virtual Interdisciplinary Forum",
      eventSchedule: [
        {
          "@type": "Event",
          name: "Opening Ceremony",
          startDate: "2025-05-15T09:00:00-04:00",
          endDate: "2025-05-15T10:00:00-04:00",
          eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
          location: {
            "@type": "VirtualLocation",
            url: "https://www.nextgensynergy.com/live"
          }
        },
        {
          "@type": "Event",
          name: "Keynote Address",
          startDate: "2025-05-15T10:15:00-04:00",
          endDate: "2025-05-15T11:15:00-04:00",
          eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
          location: {
            "@type": "VirtualLocation",
            url: "https://www.nextgensynergy.com/live"
          }
        }
      ]
    },
  }),
},
};

// 13. submission
export const submissionSuccessMetadata={
    title: "Success Submission | NextGenSynergy: The Virtual Interdisciplinary Forum",
description:
  "Successfully Submited your research to NextGenSynergy. Access submission guidelines, important dates, topics of interest, review process details, and submission portal instructions.",
keywords: [
  "NextGenSynergy submission",
  "paper submission",
  "abstract submission",
  "research submission",
  "conference proposal",
  "submission guidelines",
  "submission deadline",
  "submission system"
],

// Open Graph / Facebook
openGraph: {
  type: "website",
  url: "https://www.nextgensynergy.com/submission/success",
  title: "Paper Submission | NextGenSynergy: The Virtual Interdisciplinary Forum",
  description:
    "Submit your research to NextGenSynergy. Access submission guidelines, important dates, topics of interest, review process details, and submission portal instructions.",
  siteName: "NextGenSynergy",
  images: [
    {
      url: "https://www.nextgensynergy.com/opengraph.png",
      width: 1200,
      height: 630,
      alt: "NextGenSynergy Submission Information",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "Paper Submission | NextGenSynergy: The Virtual Interdisciplinary Forum",
  description:
    "Submit your research to NextGenSynergy. Access submission guidelines, important dates, topics of interest, review process details, and submission portal instructions.",
  images: ["https://www.nextgensynergy.com/opengraph.png"],
},

// Canonical URL
alternates: {
  canonical: "https://www.nextgensynergy.com/submission/success",
},

// Structured data
other: {
  "application/ld+json": JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Paper Submission | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Submit your research to NextGenSynergy. Access submission guidelines, important dates, topics of interest, review process details, and submission portal instructions.",
    url: "https://www.nextgensynergy.com/submission/success",
    mainEntity: {
      "@type": "HowTo",
      name: "NextGenSynergy Submission Process",
      description: "Step-by-step guide to submitting your research to NextGenSynergy",
      step: [
        {
          "@type": "HowToStep",
          name: "Prepare Manuscript",
          text: "Format your paper according to the conference guidelines"
        },
        {
          "@type": "HowToStep",
          name: "Create Account",
          text: "Register on the submission portal"
        },
        {
          "@type": "HowToStep",
          name: "Submit Abstract",
          text: "Upload your abstract and author information"
        },
        {
          "@type": "HowToStep",
          name: "Upload Full Paper",
          text: "Submit your complete manuscript before the deadline"
        }
      ]
    },
  }),
},
};


export const submissionMetadata = {
title: "Paper Submission | NextGenSynergy: The Virtual Interdisciplinary Forum",
description:
  "Submit your research to NextGenSynergy. Access submission guidelines, important dates, topics of interest, review process details, and submission portal instructions.",
keywords: [
  "NextGenSynergy submission",
  "paper submission",
  "abstract submission",
  "research submission",
  "conference proposal",
  "submission guidelines",
  "submission deadline",
  "submission system"
],

// Open Graph / Facebook
openGraph: {
  type: "website",
  url: "https://www.nextgensynergy.com/submission",
  title: "Paper Submission | NextGenSynergy: The Virtual Interdisciplinary Forum",
  description:
    "Submit your research to NextGenSynergy. Access submission guidelines, important dates, topics of interest, review process details, and submission portal instructions.",
  siteName: "NextGenSynergy",
  images: [
    {
      url: "https://www.nextgensynergy.com/opengraph.png",
      width: 1200,
      height: 630,
      alt: "NextGenSynergy Submission Information",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "Paper Submission | NextGenSynergy: The Virtual Interdisciplinary Forum",
  description:
    "Submit your research to NextGenSynergy. Access submission guidelines, important dates, topics of interest, review process details, and submission portal instructions.",
  images: ["https://www.nextgensynergy.com/opengraph.png"],
},

// Canonical URL
alternates: {
  canonical: "https://www.nextgensynergy.com/submission",
},

// Structured data
other: {
  "application/ld+json": JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Paper Submission | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Submit your research to NextGenSynergy. Access submission guidelines, important dates, topics of interest, review process details, and submission portal instructions.",
    url: "https://www.nextgensynergy.com/submission",
    mainEntity: {
      "@type": "HowTo",
      name: "NextGenSynergy Submission Process",
      description: "Step-by-step guide to submitting your research to NextGenSynergy",
      step: [
        {
          "@type": "HowToStep",
          name: "Prepare Manuscript",
          text: "Format your paper according to the conference guidelines"
        },
        {
          "@type": "HowToStep",
          name: "Create Account",
          text: "Register on the submission portal"
        },
        {
          "@type": "HowToStep",
          name: "Submit Abstract",
          text: "Upload your abstract and author information"
        },
        {
          "@type": "HowToStep",
          name: "Upload Full Paper",
          text: "Submit your complete manuscript before the deadline"
        }
      ]
    },
  }),
},
};

// 14. themes-and-topics

export const themesTopicsMetadata = {
title: "Themes and Topics | NextGenSynergy: The Virtual Interdisciplinary Forum",
description:
  "Explore the diverse themes and topics covered at NextGenSynergy. Discover interdisciplinary research areas, special tracks, emerging topics, and find your research fit within our forum.",
keywords: [
  "NextGenSynergy themes",
  "conference topics",
  "research areas",
  "interdisciplinary topics",
  "special tracks",
  "emerging research",
  "academic disciplines",
  "research scope"
],

// Open Graph / Facebook
openGraph: {
  type: "website",
  url: "https://www.nextgensynergy.com/themes-and-topics",
  title: "Themes and Topics | NextGenSynergy: The Virtual Interdisciplinary Forum",
  description:
    "Explore the diverse themes and topics covered at NextGenSynergy. Discover interdisciplinary research areas, special tracks, emerging topics, and find your research fit within our forum.",
  siteName: "NextGenSynergy",
  images: [
    {
      url: "https://www.nextgensynergy.com/opengraph.png",
      width: 1200,
      height: 630,
      alt: "NextGenSynergy Themes and Topics",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "Themes and Topics | NextGenSynergy: The Virtual Interdisciplinary Forum",
  description:
    "Explore the diverse themes and topics covered at NextGenSynergy. Discover interdisciplinary research areas, special tracks, emerging topics, and find your research fit within our forum.",
  images: ["https://www.nextgensynergy.com/opengraph.png"],
},

// Canonical URL
alternates: {
  canonical: "https://www.nextgensynergy.com/themes-and-topics",
},

// Structured data
other: {
  "application/ld+json": JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Themes and Topics | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Explore the diverse themes and topics covered at NextGenSynergy. Discover interdisciplinary research areas, special tracks, emerging topics, and find your research fit within our forum.",
    url: "https://www.nextgensynergy.com/themes-and-topics",
    mainEntity: {
      "@type": "ItemList",
      name: "NextGenSynergy Conference Themes",
      description: "Research themes and topics covered at the NextGenSynergy Virtual Interdisciplinary Forum",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Emerging Technologies and Innovation"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sustainable Development and Environmental Solutions"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Digital Transformation and Society"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Health Sciences and Biotechnology"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Interdisciplinary Approaches to Global Challenges"
        }
      ]
    },
  }),
},
};

// 15. venue

export const venueMetadata = {
title: "Virtual Venue | NextGenSynergy: The Virtual Interdisciplinary Forum",
description:
  "Learn about the virtual venue for NextGenSynergy. Explore our digital platform features, technical requirements, navigation tips, accessibility options, and virtual networking spaces.",
keywords: [
  "NextGenSynergy venue",
  "virtual conference platform",
  "digital venue",
  "online conference space",
  "virtual networking",
  "conference platform features",
  "technical requirements",
  "virtual event access"
],

// Open Graph / Facebook
openGraph: {
  type: "website",
  url: "https://www.nextgensynergy.com/venue",
  title: "Virtual Venue | NextGenSynergy: The Virtual Interdisciplinary Forum",
  description:
    "Learn about the virtual venue for NextGenSynergy. Explore our digital platform features, technical requirements, navigation tips, accessibility options, and virtual networking spaces.",
  siteName: "NextGenSynergy",
  images: [
    {
      url: "https://www.nextgensynergy.com/opengraph.png",
      width: 1200,
      height: 630,
      alt: "NextGenSynergy Virtual Venue",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "Virtual Venue | NextGenSynergy: The Virtual Interdisciplinary Forum",
  description:
    "Learn about the virtual venue for NextGenSynergy. Explore our digital platform features, technical requirements, navigation tips, accessibility options, and virtual networking spaces.",
  images: ["https://www.nextgensynergy.com/opengraph.png"],
},

// Canonical URL
alternates: {
  canonical: "https://www.nextgensynergy.com/venue",
},

// Structured data
other: {
  "application/ld+json": JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Virtual Venue | NextGenSynergy: The Virtual Interdisciplinary Forum",
    description:
      "Learn about the virtual venue for NextGenSynergy. Explore our digital platform features, technical requirements, navigation tips, accessibility options, and virtual networking spaces.",
    url: "https://www.nextgensynergy.com/venue",
    mainEntity: {
      "@type": "VirtualLocation",
      name: "NextGenSynergy Virtual Conference Platform",
      description: "The digital venue hosting the NextGenSynergy Virtual Interdisciplinary Forum",
      url: "https://conference.nextgensynergy.com",
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Platform Features",
          value: "Live streaming, interactive Q&A, networking lounges, digital poster halls, and on-demand content"
        },
        {
          "@type": "PropertyValue",
          name: "Technical Requirements",
          value: "Modern web browser, stable internet connection, and audio/video capabilities"
        },
        {
          "@type": "PropertyValue",
          name: "Accessibility Features",
          value: "Closed captioning, screen reader compatibility, and customizable display options"
        }
      ]
    },
  }),
},
};

