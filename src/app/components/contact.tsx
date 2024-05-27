import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from './alert';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    type AlertState = {
    show: boolean;
    type: "" | "success" | "failure";
    message: string;
    };

    const [alert, setAlert] = useState<AlertState>({ show: false, type: '', message: '' });    
    const [sending, setSending] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setSending(true);

        emailjs.send('service_hwi8dcr', 'template_4z4kbcd', {
            from_name: name,
            from_email: email,
            message: message
        }, 'ZXsqYjAQYr7XAEFgd')
        .then((response: any) => {
    console.log('SUCCESS!', response.status, response.text);
    setAlert({ show: true, type: 'success', message: 'Message sent!' });
    setSending(false);
}, (err: any) => {
    console.log('FAILED...', err);
    setAlert({ show: true, type: 'failure', message: 'Message failed to send!' });
    setSending(false);
});

        setName('');
        setEmail('');
        setMessage('');
    };

    const closeAlert = () => {
        setAlert({ show: false, type: '', message: '' });
    }

    return (
        <div className="flex flex-col items-center space-y-4 justify-center pb-96">
            <h1 className='py-8 pb-7 text-amber-300 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>contact</h1>
            {sending ? <p className="text-center text-amber-300 font-bold">sending...</p> : alert.show && <Alert type={alert.type} message={alert.message} onClose={closeAlert} />}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-custom-red p-8 rounded-3xl shadow max-w-prose min-w-full sm:min-w-0 sm:w-full md:min-w-md">
                <label className="text-amber-200">
                    name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-full p-2 mt-1 rounded-md bg-gray-800 text-white" />
                </label>
                <label className="text-amber-200">
                    email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 mt-1 rounded-md bg-gray-800 text-white" />
                </label>
                <label className="text-amber-200">
                    message:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full p-2 mt-1 rounded-md bg-gray-800 text-white h-20" />
                </label>
                <button type="submit" disabled={sending} className="px-4 py-2 bg-amber-300 rounded-3xl shadow text-custom-red font-extrabold text-2xl transition-colors duration-200 hover:bg-amber-400 hover:text-custom-red-dark">send</button>
            </form>
        </div>
    );
};

export default Contact;