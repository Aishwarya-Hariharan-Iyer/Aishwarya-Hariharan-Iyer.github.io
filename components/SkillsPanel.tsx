"use client";

import React from "react";
import { skills } from "./data/skills";
import { Vortex } from "./ui/vortex";
import { InfiniteMovingIcons } from "./ui/infinite-moving-cards";

const SkillsPanel = () => {
  return (
    <>
      <Vortex
        backgroundColor="transparent"
        particleCount={1000}
        baseHue={70}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full text-2xl md:text-7xl font-bold text-white"
      >
        <h1>Skills</h1>
      </Vortex>
      <div className="overflow-auto py-4 px-2 text-white">
        <InfiniteMovingIcons
          items={skills.map((skill) => ({
            icon: skill.icon,
            name: skill.name
          }))}
          direction="left" // You can adjust the direction, speed, and other props as desired
          speed="normal"
          pauseOnHover={true}
          className="flex items-center justify-center"
        />
      </div>
    </>
  );
};

export default SkillsPanel;
