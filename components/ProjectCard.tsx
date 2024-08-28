"use client";
import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";

type CardProps = {
    name: string;
    desc: string;
    details: string;
    skills: string[];
    imageSrc: string;
};

export function ProjectCard(props: CardProps) {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <PinContainer title={props.desc}>
        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {props.name}
          </h3>
          
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-transparent">
            <img 
              src={props.imageSrc} 
              alt="Project Snapshot" 
              className="w-90 h-60 object-cover cursor-pointer" 
              onClick={togglePopup} 
            />
          </div>
        </div>
      </PinContainer>

      {isPopupVisible && (
        <div className="mt-4 w-[20rem] p-4 bg-black text-white rounded-lg shadow-lg overflow-y-auto max-h-[50vh]">
          <h3 className="text-lg font-bold mb-3">{props.name}</h3>
          <div className="space-y-4 text-balance">
            {props.details.split('\n').map((paragraph, index) => (
              <p key={index} className="leading-relaxed">{paragraph}</p>
            ))}
          </div>
          <div className="mt-4 text-balance">
            <p className="text-sm font-bold inline">Skills: </p>
            <span className="text-sm">
              {props.skills.join(' • ')}
            </span>
          </div>

        </div>
      )}
    </div>
  );
}
