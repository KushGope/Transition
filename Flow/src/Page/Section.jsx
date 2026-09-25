import React, { useEffect, useRef, useState } from "react";

export const Section = ({ id, bgColor, textColor, title, domRef }) => {
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.6 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      // ref={domRef}
      ref={(element) => {
        sectionRef.current = element;
        domRef(element);
      }}
      className={`min-h-screen w-full flex flex-col items-center justify-center snap-start ${bgColor} ${textColor} transition-all duration-700`}
    >
      <h1
        className={`text-[9rem] font-bold 
            transition-all duration-1000 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
      >
        {title}
      </h1>
    </section>
  );
};
