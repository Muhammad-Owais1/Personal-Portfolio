'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="mb-20 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-28">
        <p className="mb-4 ">
          I&apos;m Muhammad Owais, AI developer with a
          passion for building modern, scalable applications. I help startups and businesses build AI-powered applications that automate support, answer customer questions, and handle repetitive tasks automatically. My goal is to turn ideas into simple AI products that save time and improve customer experience.
        </p>
        <p className="mb-4 ">
          I build AI chatbots, AI agents, and automation systems using the MERN stack, Python, LangChain, LangGraph and modern AI tools. I also use low-code and no-code platforms to quickly build MVPs and test ideas fast. This helps businesses launch AI products quickly without spending months on development.
        </p>
        <p>
          I have experience building AI apps that connect with APIs, databases, and messaging platforms like websites, WhatsApp, and other business tools. Whether you need an AI chatbot, a custom AI workflow, or a full AI SaaS MVP, I can help you design and build a working solution that solves real business problems.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
