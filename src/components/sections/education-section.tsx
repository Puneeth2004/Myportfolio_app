import { GraduationCap } from 'lucide-react';
import { AnimateOnScroll } from '../animate-on-scroll';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { education, type Education } from '@/data/content';
import { cn } from '@/lib/utils';

function TimelineItem({ item, isLast }: { item: Education; isLast: boolean }) {
  return (
    <div className="flex gap-x-3">
      <div className="relative last:after:hidden">
        <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background">
          <GraduationCap className="h-4 w-4" />
        </div>
        {!isLast && <div className="absolute left-1/2 top-7 h-full w-px -translate-x-1/2 bg-border" />}
      </div>
      <div className={cn("grow pb-8", isLast && 'pb-0')}>
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-lg font-semibold">{item.degree}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.period}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{item.description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll className="mx-auto max-w-3xl space-y-8" animationClass="animate-fade-in-up">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Education
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              My academic background.
            </p>
          </div>
          <div>
            {education.map((edu, index) => (
              <TimelineItem key={index} item={edu} isLast={index === education.length - 1} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
