"use client";

import { useState } from 'react';
import { AnimateOnScroll } from '../animate-on-scroll';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Send, Github, Linkedin } from 'lucide-react';
import { Separator } from '../ui/separator';
import { useToast } from '@/hooks/use-toast';
import { sendMessage } from '@/app/actions/sendMessage';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendMessage({ name, email, message });
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} disabled={isSubmitting} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={isSubmitting} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." required value={message} onChange={(e) => setMessage(e.target.value)} disabled={isSubmitting} />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
            <Separator className="my-6" />
            <CardContent className="text-center">
              <h3 className="mb-4 text-lg font-medium">Social Links</h3>
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
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
