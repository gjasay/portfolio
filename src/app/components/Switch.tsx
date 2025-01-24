interface ButtonProps {
  text: string
  onClick: () => void;
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, active }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 mx-2 rounded-2xl font-bold text-xl border-black border-2 transition duration-500 ease-in-out transform hover:-translate-y-1 ${ active ? 'text-amber-200 bg-title-red ' : 'text-black bg-amber-300' }`}>{text}</button>
  );
}

