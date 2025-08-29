"use client";

import { useEffect, useRef } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { AnimateOnScroll } from '../animate-on-scroll';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import { Separator } from '../ui/separator';
import { useToast } from '@/hooks/use-toast';
import { sendMessage, type State } from '@/app/actions/sendMessage';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
      <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}

export function ContactSection() {
  const initialState: State = { message: null, errors: {}, success: false };
  const [state, dispatch] = useActionState(sendMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      formRef.current?.reset();
    } else if (state.message && state.errors) {
       const errorMessages = Object.values(state.errors).flat().join(' ');
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: state.message + ' ' + errorMessages,
      });
    } else if (state.message && !state.success) {
       toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: state.message,
      });
    }
  }, [state, toast]);


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
                Have a question or want to work together? Send me a message.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={dispatch} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" required />
                   {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                   {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." required />
                  {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
            <Separator className="my-6" />
            <CardContent className="text-center">
              <h3 className="mb-4 text-lg font-medium">Or reach out directly</h3>
              <div className="flex items-center justify-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/Puneeth2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="http://www.linkedin.com/in/puneeth-k-05254824b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:nanupuneeth2004@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
                 <a
                href="mailto:nanupuneeth2004@gmail.com"
                className="mt-4 inline-block text-sm text-muted-foreground underline-offset-4 hover:underline"
              >
                nanupuneeth2004@gmail.com
              </a>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
