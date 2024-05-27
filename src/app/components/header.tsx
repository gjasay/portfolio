import { FC } from 'react';

const Header: FC = () => {
    return (
        <div className="bg-zinc-800 py-10 flex justify-center">
            <li className='flex justify-end'>
                <label className="text-2xl text-center font-bold text-amber-300 px-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><a href='#projects'>projects</a></label>
                <label className="text-2xl text-center font-bold text-amber-300 px-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><a href='#skills'>skills</a></label>
                <label className="text-2xl text-center font-bold text-amber-300 px-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><a href='#contact'>contact</a></label>
            </li>
        </div>
    );
};

export default Header;