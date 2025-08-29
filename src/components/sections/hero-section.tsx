
import Image from 'next/image';
import { Button } from '../ui/button';
import { personalData } from '@/data/content';
import { ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from '../animate-on-scroll';

const PROFILE_PICTURE_PATH = `/assets/profile-picture.png?v=1`;

export function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 -left-1/2 -top-1/2 h-[200%] w-[200%] -rotate-[25deg] bg-gradient-to-tr from-muted/50 via-background to-muted/50" />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <AnimateOnScroll
            animationClass="animate-fade-in-left"
            className="flex flex-col justify-center space-y-4 text-center lg:text-left"
          >
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
              {personalData.name}
            </h1>
            <p className="text-2xl font-medium md:text-3xl">
              {personalData.tagline}
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:mx-0">
              Welcome to my digital space. Here you'll find a collection of my work, skills, and professional experience.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-start justify-center">
              <Button size="lg" asChild>
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </AnimateOnScroll>
          <div className="relative flex justify-center">
            <Image
              src={PROFILE_PICTURE_PATH}
              data-ai-hint="profile picture"
              alt="Puneeth's Profile Picture"
              width={400}
              height={400}
              className="h-64 w-64 rounded-full object-cover shadow-2xl lg:h-96 lg:w-96 ring-4 ring-background animate-fade-in"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
