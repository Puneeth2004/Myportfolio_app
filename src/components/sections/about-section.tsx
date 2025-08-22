import { AnimateOnScroll } from '../animate-on-scroll';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { personalData, skills, type Skill } from '@/data/content';
import { Progress } from '../ui/progress';

function SkillBar({ name, level }: Skill) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{level}%</p>
      </div>
      <Progress value={level} aria-label={`${name} skill level`} />
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll animationClass="animate-fade-in">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {personalData.bio}
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">My Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </CardContent>
            </Card>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
