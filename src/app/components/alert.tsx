import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type AlertProps = {
    type: 'success' | 'failure' | '';
    message: string;
    onClose: () => void;
};

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
    return (
        <div className={`alert ${type === 'success' ? 'bg-green-600' : type === 'failure' ? 'bg-red-600' : 'bg-yellow-600'} bg-opacity-75 text-white p-4 rounded-md flex justify-between items-center max-w-lg`}>
            <span className="flex justify-center items-center ">{message}</span>
            <button onClick={onClose} className="ml-4">
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    );
};

export default Alert;