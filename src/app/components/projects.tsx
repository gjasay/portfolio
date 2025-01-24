import React from "react";

import { useState } from "react";
import { GameDevProjects } from "./GameDevProjects";
import { Button } from "./Switch";
import { WebDevProjects } from "./WebDevProjects";

const Projects: React.FC = () => {
  const [projectsToShow, setProjectsToShow] = useState("all"); // "web", "game", "all"

  return (
    <div className="flex flex-col items-center justify-center pb-2">
      <h1 className="py-4 pb-2 text-2xl font-extrabold text-amber-300 sm:text-3xl md:text-4xl lg:text-5xl">
        projects
      </h1>
      <div className="flex flex-row py-4">
        <Button active={projectsToShow === "all"} text="all" onClick={() => setProjectsToShow("all")} />
        <Button active={projectsToShow === "web"} text="websites" onClick={() => setProjectsToShow("web")} />
        <Button active={projectsToShow === "game"} text="games" onClick={() => setProjectsToShow("game")} />
      </div>
      { projectsToShow === "game" &&  <GameDevProjects /> }
      { projectsToShow === "web" &&  <WebDevProjects /> }
      { projectsToShow === "all" && 
        <>
          <WebDevProjects />
          <GameDevProjects />
        </>
      }
    </div>
  );
};

export default Projects;
