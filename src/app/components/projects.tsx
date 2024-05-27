import React from 'react';
import ProjectCard from './projectcard';

const Projects: React.FC = () => {
    return (
        <div className="pb-2 flex flex-col items-center justify-center">
            <h1 className='py-14 pb-7 text-amber-300 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>projects</h1>
            <div className='flex flex-wrap justify-center gap-4'>
                <ProjectCard 
                    title='demonware'
                    description={`My creation for Ludum Dare 55. As the team lead and programmer, I guided our efforts, utilizing TypeScript and Phaser to build our game. It was an exciting and challenging experience, filled with collaboration, creativity, and the thrill of creating something remarkable within a short timeframe.`}
                    languages={['TypeScript', 'Phaser']}
                    source='https://github.com/gjasay/Demonware-Inc'
                    game='https://demonware.gameswithgabe.com/'
                    images={['images/demonware.png', 'images/demonware2.gif', 'images/youre_fired.png']}
                />
                <ProjectCard
                    title='wasteland wander'
                    description={`My 2d shooter project developed with Unity and C#. It's an adrenaline-fueled top-down shooter set in a desert wasteland. Take control of your vehicle, battle enemy rovers and drones with many different abilities."`}
                    languages={['Unity', 'C#']}
                    source='https://github.com/gjasay/Wasteland-Wander'
                    game='https://hamster-cheeks.itch.io/wasteland-wander'
                    images={['images/wasteland-wander2.png', 'images/wasteland-wander1.png']}
                />
                <ProjectCard
                    title="murphy's madness"
                    description={`I made this game in 72 hours for Global Game Jam 2024.`}
                    languages={['TypeScript', 'React', 'Three.js']}
                    source='https://github.com/casualWaist/ggj-2024'
                    game='https://ggj-2024.vercel.app/'
                    images={['images/murphy1.png', 'images/murphy2.gif']}
                />
            </div>
        </div>
    );
};

export default Projects;