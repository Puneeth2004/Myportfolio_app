
"use client";

import Image from 'next/image';
import { Button } from '../ui/button';
import { AnimateOnScroll } from '../animate-on-scroll';
import { personalData } from '@/data/content';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [imageSrc, setImageSrc] = useState("/assets/profile-picture.png");

  useEffect(() => {
    setImageSrc(`/assets/profile-picture.png?${new Date().getTime()}`);
  }, []);

  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
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
          <AnimateOnScroll
            animationClass="animate-fade-in-right"
            delay="200ms"
            className="flex justify-center"
          >
            <Image
              src={imageSrc}
              key={imageSrc}
              data-ai-hint="profile picture"
              alt="Alex Doe's Profile Picture"
              width={400}
              height={400}
              className="h-64 w-64 rounded-full object-cover shadow-2xl lg:h-96 lg:w-96"
              priority
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
