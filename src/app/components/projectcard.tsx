import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSProperties, FC, useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  languages: string[]; 
  source: string;
  game: string;
}

interface SlideshowArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
}



const SlideshowArrow: FC<SlideshowArrowProps> = ({ direction, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: '50%',
    left: direction === 'left' ? '0' : '100%',
    transform: isHovered ? 'translate(-50%, -50%) scale(1.2)' : 'translate(-50%, -50%)',
    minWidth: '2.5rem',
    minHeight: '2.6875rem',
    cursor: 'pointer',
    color: '#FCD34D',
    fontWeight: 'bolder',
    fontSize: '1.5625rem',
    backgroundColor: isHovered ? 'rgba(141,62,55, 1)' : 'rgba(141,62,55, 0.85)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  return (
    <div
      style={arrowStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {direction === 'left' ? <FontAwesomeIcon icon={faChevronLeft}/> : <FontAwesomeIcon icon={faChevronRight}/>}
    </div>
  );
};

const ProjectCard: FC<ProjectCardProps> = ({ images, title, description, languages, source, game }) => {
  return (
    <div className="text-center bg-zinc-900 text-amber-200 p-7 rounded-3xl shadow-md m-1 transition duration-500 ease-in-out transform hover:-translate-y-2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl flex flex-col">
      <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-300 font-extrabold mb-2">{title}</h2>
      {images && (
        <div className="slide-container mb-4">
          <Fade
            arrows={true}
            prevArrow={<SlideshowArrow direction="left" onClick={() => {}} />}
            nextArrow={<SlideshowArrow direction="right" onClick={() => {}} />}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img className="w-full h-auto rounded-3xl" src={image} />
              </div>
            ))}
          </Fade>
        </div>
      )}
      <p className="text-sm sm:text-base mb-4">{description}</p>
      <div className="flex gap-2 justify-center flex-wrap">
        {languages.map((language, index) => (
          <span key={index} className="text-xs sm:text-sm font-medium text-amber-100 bg-custom-red px-2 py-1 rounded">{language}</span>
        ))}
      </div>
      <div className="flex justify-center mt-4 text-amber-200">
        <a href={source} target='_blank' className='px-2 text-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href={game} target='_blank' className='px-2 text-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
          <FontAwesomeIcon icon={faGamepad}/>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;