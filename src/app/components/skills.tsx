import React from 'react';

const Skills: React.FC = () => {
    const skills = ['Unreal', 'C++', 'Unity', 'C#', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Git'];

    return (
        <div className="flex flex-col items-center space-y-4  justify-center">
            <h1 className='py-8 pb-7 text-amber-300 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>skills</h1>
            <div className="flex flex-wrap justify-center gap-4 max-w-md">
                {skills.map((skill, index) => (
    <div key={index} className="px-4 py-2 bg-custom-red text-amber-200 rounded-3xl shadow transform transition duration-500 hover:scale-105 hover:-translate-y-1 cursor-default">
        {skill}
    </div>
))}
            </div>
        </div>
    );
};

export default Skills;