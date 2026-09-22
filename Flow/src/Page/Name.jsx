import React, { useEffect } from "react";

const Name = () => {
  useEffect(() => {
    // 1. Select all sections with an ID
    const sections = document.querySelectorAll("section[id]");

    // 2. Set up the observer configuration
    const observerOptions = {
      root: document.querySelector(".overflow-y-scroll"), // Targets your main container
      threshold: 0.6, // Fires when 60% of the section is visible on screen
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // 3. When a section takes over the screen, update the URL hash
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          window.history.replaceState(null, "", `#${id}`);
        }
      });
    }, observerOptions);

    // 4. Start observing each section
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <section
        id="very"
        className="min-h-screen flex items-center justify-center bg-red-800 text-teal-300 snap-start"
      >
        <h1 className="text-[9rem] font-bold">VERY</h1>
      </section>

      <section
        id="simple"
        className="min-h-screen flex items-center justify-center bg-gray-50 text-zinc-950 snap-start"
      >
        <h1 className="text-[9rem] font-bold">SIMPLE</h1>
      </section>

      <section
        id="scroll"
        className="min-h-screen flex items-center justify-center  bg-gray-300 text-stone-800 snap-start"
      >
        <h1 className="text-[9rem] font-bold">SCROLL</h1>
      </section>

      <section
        id="snap"
        className="min-h-screen flex items-center justify-center bg-zinc-800 text-gray-300 snap-start"
      >
        <h1 className="text-[9rem] font-bold">SNAP</h1>
      </section>
    </div>
  );
};

export default Name;
