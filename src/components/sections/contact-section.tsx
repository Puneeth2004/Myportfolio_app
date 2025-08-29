"use client";

import { AnimateOnScroll } from '../animate-on-scroll';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll className="mx-auto max-w-xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Get In Touch
              </CardTitle>
              <CardDescription>
                You can reach me on my social platforms.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-6">
              <div className="flex items-center justify-center gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/Puneeth2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="http://www.linkedin.com/in/puneeth-k-05254824b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                 <Button variant="outline" size="icon" asChild>
                  <a href="mailto:nanupuneeth2004@gmail.com" aria-label="Email">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
