import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-grid">
      <Navbar />
      <Hero />

      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-orange/5 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-brand-orange/5 blur-[120px] rounded-full"></div>
      </div>
    </main>
  );
}
