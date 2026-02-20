/**
 * Home Page
 * Main landing page composition pulling in modular components
 */
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />

        {/* Animated Pink Ribbon */}
        <div className="w-full border-y-4 border-black bg-neon-pink text-white py-3 md:py-4 overflow-hidden flex whitespace-nowrap mb-12 md:mb-20 relative z-20">
          <div className="inline-flex flex-nowrap font-black italic uppercase text-sm md:text-base tracking-widest leading-none items-center animate-marquee" style={{ animationDuration: '28s' }}>
            {[
              "SLEEP IS A MYTH ✦",
              "IT WORKS ON MY MACHINE ✦",
              "JUST ONE MORE COMMIT ✦",
              "ANIME WAS RIGHT ✦",
              "UNDEFINED IS NOT A FUNCTION ✦",
              "NOT VIBE CODED, PROMISE ✦",
              "CHAOS IS THE PLAN ✦",
              "TOUCH GRASS EVENTUALLY ✦",
              "BUILT DIFFERENT. DEBUGGED DIFFERENT. ✦",
              "THE LOOP IS INTENTIONAL ✦",
            ].map((text, i) => (
              <span key={i} className="mx-12 md:mx-20 shrink-0">
                {text}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              "SLEEP IS A MYTH ✦",
              "IT WORKS ON MY MACHINE ✦",
              "JUST ONE MORE COMMIT ✦",
              "ANIME WAS RIGHT ✦",
              "UNDEFINED IS NOT A FUNCTION ✦",
              "I BUILD THINGS THAT SCARE ME ✦",
              "CHAOS IS THE PLAN ✦",
              "TOUCH GRASS EVENTUALLY ✦",
              "BUILT DIFFERENT. DEBUGGED DIFFERENT. ✦",
              "THE LOOP IS INTENTIONAL ✦",
            ].map((text, i) => (
              <span key={`b-${i}`} className="mx-12 md:mx-20 shrink-0" aria-hidden="true">
                {text}
              </span>
            ))}
          </div>
        </div>

        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
