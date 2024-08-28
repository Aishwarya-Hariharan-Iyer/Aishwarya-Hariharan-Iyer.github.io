import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Vortex } from "./ui/vortex";
import { experiences } from './data/experience';

export function Experience() {
  return (
    <div className="w-full">
    <Vortex
    backgroundColor="transparent"
    particleCount={1000}
    baseHue={20}
    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full text-2xl md:text-7xl font-bold text-white">
      <h1>
        Experience
      </h1>
    </Vortex>
      <Timeline data={experiences} />
    </div>
  );
}
