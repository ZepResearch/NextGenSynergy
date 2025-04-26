import { AboutSection } from "@/components/About";
import { CtaSection } from "@/components/cta-section";
import { DateTimeline } from "@/components/date-timeline";
import { FaqSection } from "@/components/faq-section";
import Hero from "@/components/Hero";
import { ObjectivesSection } from "@/components/objectives-section";
import { ReviewsSection } from "@/components/reviews-section";
import { SpeakerSection } from "@/components/speaker-section";
import { VenueDetailCard } from "@/components/venue-detail-card";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      <Hero/>
    <AboutSection/>
    <ObjectivesSection/> 
   <DateTimeline/>
   <SpeakerSection/>
    <CtaSection/>
    <VenueDetailCard/>
    <ReviewsSection/>   
    <FaqSection/>
    </div>
  );
}
