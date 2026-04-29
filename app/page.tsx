import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import WorkflowsIntroSection from "@/components/WorkflowsIntroSection";
import WorkflowTabsSection from "@/components/WorkflowTabsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <Hero />
      <ProblemSection />
      <WorkflowsIntroSection />
      <WorkflowTabsSection />
      
      {/* Additional sections will be added here one by one */}
    </main>
  );
}
