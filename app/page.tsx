import { Metadata } from "next";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitCards } from "@/components/BenefitCards";
import { ScheduleTable } from "@/components/ScheduleTable";
import { PlansSection } from "@/components/PlansSection";
import { LocationSection } from "@/components/LocationSection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ContactForm } from "@/components/ContactForm";
import { StickyWhatsappCTA } from "@/components/StickyWhatsappCTA";
import { Footer } from "@/components/Footer";
import { getLandingContent } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Fizik Gym | Gimnasio en Chijra",
  description: "Musculacion, fuerza y cardio con CTA directo a WhatsApp.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  const data = getLandingContent();
  const formEnabled = (process.env.CONTACT_FORM_ENABLED ?? "true") === "true";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.gym.name,
    description: data.gym.description,
    telephone: data.gym.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.gym.address.line1,
      addressLocality: data.gym.address.city,
      addressRegion: data.gym.address.province,
      addressCountry: "AR"
    },
    sameAs: [data.gym.social.instagram, data.gym.social.facebook],
    url: siteUrl,
    openingHoursSpecification: data.schedules
      .filter((item) => !item.isClosed)
      .map((item) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: item.weekday,
        opens: item.ranges[0]?.split(" - ")[0] ?? "07:00",
        closes: item.ranges[0]?.split(" - ")[1] ?? "22:30"
      }))
  };

  return (
    <>
      <Header />
      <main id="contenido">
        <HeroSection data={data} />
        <BenefitCards />
        <ScheduleTable schedules={data.schedules} />
        <PlansSection plans={data.plans} whatsappNumber={data.gym.whatsappNumber} />
        <LocationSection gym={data.gym} />
        <GalleryGrid images={data.images} />
        <TestimonialsSection testimonials={data.testimonials} />
        <FaqAccordion faq={data.faq} />
        <ContactForm enabled={formEnabled} />
      </main>
      <Footer gym={data.gym} />
      <StickyWhatsappCTA whatsappNumber={data.gym.whatsappNumber} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
