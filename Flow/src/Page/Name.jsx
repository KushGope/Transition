import React, { useEffect, useRef } from "react";
import { Section } from "./Section";

const SECTIONS = [
  {
    id: "very",
    title: "VERY",
    bgColor: "bg-red-800",
    textColor: "text-teal-300",
  },
  {
    id: "simple",
    title: "SIMPLE",
    bgColor: "bg-gray-50",
    textColor: "text-zinc-950",
  },
  {
    id: "scroll",
    title: "SCROLL",
    bgColor: "bg-gray-300",
    textColor: "text-stone-800",
  },
  {
    id: "snap",
    title: "SNAP",
    bgColor: "bg-zinc-800",
    textColor: "text-gray-300",
  },
];

const Name = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const Sections = sectionsRef.current;

    if (!container || Sections.length === 0) return;

    const observerOptions = {
      root: container,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          window.history.replaceState(null, "", `#${id}`);
        }
      });
    }, observerOptions);

    Sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scroll-container-slow 
      [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {SECTIONS.map((sec, index) => (
        <Section
          title={sec.title}
          id={sec.id}
          bgColor={sec.bgColor}
          textColor={sec.textColor}
          domRef={(e) => (sectionsRef.current[index] = e)}
        />
      ))}
    </div>
  );
};

export default Name;
