"use client";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { About } from "@/components/About";
import { SparklesCore } from "@/components/ui/sparkles";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <div className="App">
    <Navbar />
    <LandingPage />
    </div>
  );
}

