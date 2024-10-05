import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "@/components/HeroSection";
import OurTrainers from "@/components/OurTrainers";
import TestiCards from "@/components/TestimonialCards";
import UpWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return(
    <main className="min-h-screen bg-black/[0.94]  antialiased ">
      <Hero/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestiCards/>
      <UpWebinar/>
      <OurTrainers/>
    </main>
  );
}
