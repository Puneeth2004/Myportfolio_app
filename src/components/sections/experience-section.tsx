import { Building, GraduationCap } from 'lucide-react';
import { AnimateOnScroll } from '../animate-on-scroll';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { experiences, type Experience } from '@/data/content';
import { cn } from '@/lib/utils';

function TimelineItem({ experience, isLast }: { experience: Experience; isLast: boolean }) {
  const Icon = experience.type === 'work' ? Building : GraduationCap;

  return (
    <div className="flex gap-x-3">
      <div className="relative last:after:hidden">
        <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background">
          <Icon className="h-4 w-4" />
        </div>
        {!isLast && <div className="absolute left-1/2 top-7 h-full w-px -translate-x-1/2 bg-border" />}
      </div>
      <div className={cn("grow pb-8", isLast && 'pb-0')}>
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-lg font-semibold">{experience.role}</CardTitle>
                <p className="text-sm text-muted-foreground">{experience.company}</p>
              </div>
              <p className="text-sm text-muted-foreground">{experience.period}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{experience.description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experience & Education
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              My professional journey and academic background.
            </p>
          </div>
          <div>
            {experiences.map((exp, index) => (
              <TimelineItem key={index} experience={exp} isLast={index === experiences.length - 1} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
