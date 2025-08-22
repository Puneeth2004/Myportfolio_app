"use client";

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animationClass?: string;
  delay?: string;
}

export function AnimateOnScroll({
  children,
  className,
  animationClass = 'animate-fade-in-up',
  delay = '0ms',
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity duration-1000 ease-out',
        isVisible ? 'opacity-100' : 'opacity-0',
        isVisible ? animationClass : '',
        className
      )}
      style={{ animationDelay: isVisible ? delay : '0ms' }}
    >
      {children}
    </div>
  );
}
