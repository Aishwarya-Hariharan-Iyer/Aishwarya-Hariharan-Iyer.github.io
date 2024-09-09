import React from "react";
import { Vortex } from "./ui/vortex";
import {personalData} from "./data/personal-data";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/moving-border";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const words = ["poet", "programmer", "dreamer", "doer"]

const content = [
  {
    title: "Hi There!",
    description:
      "I am a Year 4 undergrad at the National University of Singapore (NUS), pursuing Computer Science (Hons.) and enrolled in the University Scholars Programme (USP). I specialise in the Artificial Intellience and Software Engineering focus areas.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <img
          src="/profile.png"
          alt="linear board demo"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "What Do I Love?",
    description:
      "I love intellectual adventures - challenging problem statements that invite the use of creative and technial depth. Capturing patterns in data and socially meaningful causes are the two other pillars of my interest.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <img
          src="/aish-1.jpg"
          alt="linear board demo"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },

  {
    title: "What Can I Offer?",
    description:
      "Through my industrial and research internships, as well as my passion projects, I have built skills in the areas of web development, data analysis and dashboard construction, machine learning, deep learning, natural language processing, computer vision and signal processing. I have often anchored myself in the tenets of rigorous research and an agile workflow.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <img
          src="/aish-2.jpg"
          alt="linear board demo"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },

  {
    title: "Still there? Here's A Poem From Me!",
    description: "And so I think and I wander,",
    line2: "In the defiant wilderness of thoughts.",
    line3: "As my soul blooms in rapturous wonder,",
    line4: "I become all that I had sought.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <img
          src="/aish-3.jpg"
          alt="linear board demo"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
];

export function About() {
  return (
    <div>
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
  
  <Vortex
    backgroundColor="transparent"
    rangeY={200}
    particleCount={1500}
    baseHue={180}
    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full text-2xl md:text-7xl font-bold text-white">
      Aishwarya Hariharan Iyer
    <p className="text-white text-sm md:text-xl mt-6 text-center">
      CS (Hons.) + University Scholar&apos;s Programme | NUS &apos;25
    </p>
    <br/>
    <h6 className="text-white text-xl md:text-2xl font-bold text-center">
      I am a<FlipWords words={words} duration={2000} className="text-white text-xl md:text-2xl font-bold text-center" />
    </h6>


    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
    <a
        href="https://github.com/Aishwarya-Hariharan-Iyer" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-800 hover:text-white-500 font-3xl"
        aria-label="GitHub"
      >
        <FaGithub size={40} />
      </a>
      <a 
        href="https://drive.google.com/uc?export=download&id=11t_O4WJ5lqg0nw1AGVhDZZ08xeuYY-6j" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-transparent text-white border border-white hover:bg-gray-700 hover:text-white rounded-full px-4 py-2 inline-block text-center"
      >
        Resume
      </a>
      <a
        href="https://www.linkedin.com/in/aishwarya-h-iyer/" // Replace with your LinkedIn profile link
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-700 hover:text-white-500"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={40} />
      </a>
    </div>
  </Vortex>
  </div>
  <div className="p-7">
      <StickyScroll content={content} />
    </div>
    </div>
  );
}
