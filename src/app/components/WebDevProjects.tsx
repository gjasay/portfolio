import ProjectCard from "./projectcard";

export const WebDevProjects = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
    <ProjectCard
      title="tiny vegan"
      description={`Webpage I created for a local business using React, TypeScript, and Tailwind CSS. I worked closely with the client to design and develop a website that met their needs and showcased their store`}
      languages={["React", "TypeScript", "Tailwind CSS"]}
      source="https://github.com/gjasay/tiny-vegan"
      game="https://tinyvegantakeout.com/"
      images={["images/tinyvegan.png", "images/tinyvegan2.png"]}
    />
    <ProjectCard
      title="portfolio"
      description={`My personal portfolio website showcasing my projects, skills, and experience. I built this website using React, Tailwind CSS, and Vercel. It's a work in progress, and I'm always looking for ways to improve it.`}
      languages={["React", "TypeScript", "Tailwind CSS"]}
      source="https://github.com/gjasay/portfolio"
      game="https://gabeasay.dev/"
      images={["images/portfolio.png", "images/portfolio2.png"]}
    />
    </div>
  );
};
