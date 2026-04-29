import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <Hero />
      <ProblemSection />
      
      {/* Additional sections will be added here one by one */}
    </main>
  );
}
