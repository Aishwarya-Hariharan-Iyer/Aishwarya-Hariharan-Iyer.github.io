"use client";
import { About } from "@/components/About";
import { SparklesCore } from "@/components/ui/sparkles";
import Projects from "./Projects";
import Education from "./Education";
import { Experience } from "./Experience";
import SkillsPanel from "./SkillsPanel";

export default function LandingPage() {
  return (
  <div className="relative w-full h-screen bg-black overflow-auto py-10">
  <div className="fixed inset-0 w-full h-full pointer-events-none">
    <SparklesCore
      id="tsparticlesfullpage"
      background="transparent"
      minSize={0.6}
      maxSize={1.4}
      particleDensity={100}
      className="w-full h-full"
      particleColor="#FFFFFF"
    />
    <SparklesCore
      id="tsparticlesfullpage2"
      background="transparent"
      minSize={5.8}
      maxSize={9.5}
      particleDensity={600}
      className="w-full h-full"
      particleColor="#b442ff"
    />
    <SparklesCore
      id="tsparticlesfullpage3"
      background="transparent"
      minSize={1.0}
      maxSize={3.4}
      particleDensity={190}
      className="w-full h-full"
      particleColor="#42ffe9"
    />
    <SparklesCore
      id="tsparticlesfullpage4"
      background="transparent"
      minSize={1.3}
      maxSize={2.5}
      particleDensity={300}
      className="w-full h-full"
      particleColor="#5fff42"
    />
    <SparklesCore
      id="tsparticlesfullpage5"
      background="transparent"
      minSize={0.5}
      maxSize={2.5}
      particleDensity={100}
      className="w-full h-full"
      particleColor="#fcf803"
    />
  </div>

    <section id="about" className="bg-transparent">
        <About />
    </section>
    <br />
    <section id="education" className="bg-transparent">
        <Education />
    </section>
    <br />
    <section id="experience" className="bg-transparent">
        <Experience />
    </section>
    <br />
    <section id="projects" className="bg-transparent">
        <Projects />
    </section>
    <br />
    <section id="skills" className="bg-transparent">
        <SkillsPanel />
    </section>

  </div>

  );
}

