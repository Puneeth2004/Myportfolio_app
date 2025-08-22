import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { EducationSection } from '@/components/sections/education-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
