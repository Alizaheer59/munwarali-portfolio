import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={className + " flex flex-wrap justify-center"}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.3em] relative inline-block">
          {word.split("").map((char, j) => {
            const charIndex = i * 10 + j; 
            const totalChars = words.length * 10;
            const start = charIndex / totalChars;
            const end = start + (1 / totalChars);
            const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
            
            return (
              <span key={j} className="relative inline-block">
                <span className="opacity-0">{char}</span>
                <motion.span style={{ opacity }} className="absolute left-0 top-0">{char}</motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </p>
  );
}
