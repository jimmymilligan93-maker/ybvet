import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import WhyYBVet from "@/components/home/WhyYBVet";
import ServicesGrid from "@/components/home/ServicesGrid";
import About from "@/components/home/About";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import CTAStrip from "@/components/home/CTAStrip";

export const metadata: Metadata = {
  title: "Yangebup-Beeliar Vet Clinic | Local Vet for Dogs & Cats",
  description:
    "YB Vet — your trusted local veterinary clinic in Yangebup. Serving dogs and cats across Beeliar, Success, Aubin Grove, and Bibra Lake. Book online or call (08) 9417 2882.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyYBVet />
      <ServicesGrid />
      <About />
      <Team />
      <Testimonials />
      <CTAStrip />
    </>
  );
}
