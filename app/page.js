"use client"
import About from "@/components/about";
import Skills from "@/components/skills";
import { Section } from "@/components/section";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Educations from "@/components/education";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <>
      <section id="about">
        <About />
      </section>
      <Section heading="skills" id="skills">
        <Skills />
      </Section>
      <Section heading="experience" id="experience">
        <Experience />
      </Section>
      <Section heading="projects" id="projects">
        <Projects />
      </Section>
      <Section heading="education" id="education">
        <Educations />
      </Section>
      <Section heading="contact me" id="contact">
        <Contact />
      </Section>
    </>
  );
}
