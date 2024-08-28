"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { educations } from './data/educations';
import { Vortex } from "./ui/vortex";

export default function Education() {
  const cards = educations.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-120 py-20">
    <Vortex
    backgroundColor="transparent"
    particleCount={1000}
    baseHue={70}
    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full text-2xl md:text-7xl font-bold text-white">
      <h1>
        Education
      </h1>
    </Vortex>
      <Carousel items={cards} />
    </div>
  );
}