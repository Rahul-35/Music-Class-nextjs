import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return(
    <main className="min-h-screen bg-black/[0.94]  antialiased bg-grid-white/[0.2]">
      <Hero/>
      <FeaturedCourses/>
      <WhyChooseUs/>
    </main>
  );
}
