'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-3 rounded border px-3 py-1"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative flex size-2 rounded-full bg-green-400"></span>
          </span>
          <span className="font-mono text-sm">Available for work!</span>
        </Link>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        Hi I&#39;m a{' '}
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          Artifical Intelligence
        </span>{' '}
        developer creating modern AI Apps, Agents & Chatbots.
      </motion.h1>
      {/* . */}

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-xl"
      >
        I develop AI Apps and AI Agents that reduce customer support workload by 60%. I help startups and businesses turn their ideas into real AI products quickly. I build AI chatbots, automation systems, and intelligent agents that can talk with users, answer questions, and handle tasks automatically. I work with the MERN stack, Python, and modern AI tools, and I also use low-code and no-code platforms to build fast and cost-effective solutions.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-row flex-wrap justify-center gap-3"
      >
        {/* GitHub */}
        <Button asChild size="lg" className="min-w-[160px]">
          <Link
            href="https://github.com/Muhammad-Owais1"
            target="_blank"
            aria-label="GitHub"
          >
            <Icons.github className="mr-2 size-5" />
            GitHub
          </Link>
        </Button>

        {/* Upwork */}
        <Button variant="outline" size="lg" className="min-w-[160px]" asChild>
          <Link
            href="https://www.upwork.com/freelancers/~01eccec27280482b6a?mp_source=share"
            target="_blank"
            aria-label="Upwork"
          >
            <Icons.upwork className="mr-2 size-5" />
            Upwork
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};
