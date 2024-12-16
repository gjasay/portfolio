import { FC } from 'react';
import Typewriter from 'typewriter-effect';
import Header from './components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import Projects from './components/projects';
import './global.css'
import Skills from './components/skills';
import Contact from './components/contact';

const Landing: FC = () => {
    return (
        <div className=" bg-zinc-800 h-full cursor-default">
            <Header />
            <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center items-center'>
                
                <div className='py-8 flex-col'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-extrabold text-title-red py-5'>
                        <Typewriter 
                            options={{
                                strings: ["hey i'm gabe"],
                                autoStart: true,
                                loop: true,
                                cursor: "▋",
                                delay: "natural",
                                //@ts-expect-error shut the FUCK up
                                pauseFor: 8000,   
                            }}
                    />
                    </h1>
                    <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-amber-300'>
                        game programmer
                    </h2>
                    <text>
                        <p className='text-center text-xs sm:text-sm md:text-base lg:text-lg text-amber-200 py-8'>
                        i'm a software engineer who loves making fun and exciting game mechanics <br />
                        always eager to learn and grow, i'm constantly exploring new ideas and techniques <br />
                        </p>
                    </text>
                    <div className='text-md sm:text-md md:text-2xl lg:text-3xl text-amber-200 flex justify-center'>
                        <a href="https://github.com/gjasay" target="_blank" className='px-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-asay/" target="_blank" className='px-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href='https://medium.com/@gabeasay/' target="_blank" className='px-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                            <FontAwesomeIcon icon={faMedium} />
                        </a>
                    </div>
                    
                </div>
                <div className='px-4'>
                    <img src='/images/profile.jpeg' className='rounded-full w-52 h-auto sm:w-64 sm:h-auto md:w-80 md:h-auto lg:w-96 lg:h-auto shadow-lg border-4 border-title-red mx-auto' />
                </div>
            </div>
            <div id='projects'><Projects /></div>
            <div id='skills'><Skills /></div>
            <div id='contact'><Contact /></div>
        </div>
    );
};

export default Landing;
