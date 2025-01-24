import ProjectCard from "./projectcard";

export const GameDevProjects: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <ProjectCard
        title="up the water spout"
        description={`A game I made for GMTK Game Jam 2024. It's a platformer game where you build the your own levels and swing your way to the top. I was primarily responsible for creating the building mechanics.`}
        languages={["Unity", "C#"]}
        source=""
        game="https://leeroysbro.itch.io/up-the-water-spout"
        images={["images/waterspout.png", "images/waterspout2.png", "images/waterspout3.png"]}
        />
      <ProjectCard
        title="demonware"
        description={`My creation for Ludum Dare 55. As the team lead and programmer, I guided our efforts, utilizing TypeScript and Phaser to build our game. It was an exciting and challenging experience, filled with collaboration, creativity, and the thrill of creating something remarkable within a short timeframe.`}
        languages={["TypeScript", "Phaser"]}
        source="https://github.com/gjasay/Demonware-Inc"
        game="https://demonware.gameswithgabe.com/"
        images={[
          "images/demonware.png",
          "images/demonware2.gif",
          "images/youre_fired.png",
        ]}
      />
      <ProjectCard
        title="mcdowell cave story"
        description={`I made this game during a game jam in a cabin with my local game dev meetup group, RVA game jams. It's a difficult horror game inspired by the caves next to the cabin. I did all the programming.`}
        languages={["Unity", "C#"]}
        source=""
        game="https://hamster-cheeks.itch.io/mcdowell-cave-story"
        images={["images/mcdowell.png", "images/mcdowell2.png", "images/mcdowell3.png"]}
      />
      <ProjectCard
        title="wasteland wander"
        description={`My 2d shooter project developed with Unity and C#. It's an adrenaline-fueled top-down shooter set in a desert wasteland. Take control of your vehicle, battle enemy rovers and drones with many different abilities."`}
        languages={["Unity", "C#"]}
        source="https://github.com/gjasay/Wasteland-Wander"
        game="https://hamster-cheeks.itch.io/wasteland-wander"
        images={[
          "images/wasteland-wander2.png",
          "images/wasteland-wander1.png",
        ]}
      />
      <ProjectCard
        title="murphy's madness"
        description={`I made this game in 72 hours for Global Game Jam 2024.`}
        languages={["TypeScript", "React", "Three.js"]}
        source="https://github.com/casualWaist/ggj-2024"
        game="https://ggj-2024.vercel.app/"
        images={["images/murphy1.png", "images/murphy2.gif"]}
      />
    </div>
  );
};
