
"use client";

import Image from 'next/image';
import { AnimateOnScroll } from '../animate-on-scroll';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { projects, type Project } from '@/data/content';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Github, ExternalLink } from 'lucide-react';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <Image
          src={project.image}
          data-ai-hint={project.image_alt}
          alt={project.title}
          width={600}
          height={400}
          className="aspect-video w-full object-cover"
        />
      </CardHeader>
      <div className="flex flex-1 flex-col p-6">
        <CardTitle className="font-headline mb-2 text-xl">{project.title}</CardTitle>
        <CardContent className="flex-1 p-0 text-muted-foreground">
          <p>{project.description}</p>
        </CardContent>
      </div>
      <CardFooter className="flex-col items-start gap-4 p-6 pt-0">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {project.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          {project.demo && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll className="space-y-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Here are some of the projects I've worked on.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <AnimateOnScroll key={project.title} delay={`${index * 100}ms`} className="h-full">
                <ProjectCard project={project} />
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
