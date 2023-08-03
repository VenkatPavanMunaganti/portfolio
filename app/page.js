"use client"
import About from "@/components/about";
import Skills from "@/components/skills";
import { Section } from "@/components/section";
import Experience from "@/components/experience";
export default function Home() {
  return (
    <>
      <section id="about">
        <About />
      </section>
      <Section heading="skills">
        <Skills />
      </Section>
      <Section heading="Experience">
        <Experience />
      </Section>

    </>
  );
}
