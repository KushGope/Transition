export const Section = ({ id, bgColor, textColor, title, domRef }) => {
  return (
    <section
      id={id}
      ref={domRef}
      className={`min-h-screen w-full flex flex-col items-center justify-center snap-start ${bgColor} ${textColor} transition-all duration-700`}
    >
      <h1 className="text-[9rem] font-bold">
        {/* tracking-tight animate-fade-in */}
        {title}
      </h1>
    </section>
  );
};
