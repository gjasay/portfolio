import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.send('service_hwi8dcr', 'template_4z4kbcd', {
            from_name: name,
            from_email: email,
            message: message
        }, 'ZXsqYjAQYr7XAEFgd')
        .then((response: any) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err: any) => {
            console.log('FAILED...', err);
        });

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="flex flex-col items-center space-y-4 justify-center pb-96">
            <h1 className='py-8 pb-7 text-amber-300 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>contact</h1>
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
                <button type="submit" className="px-4 py-2 bg-amber-300 rounded-3xl shadow text-custom-red font-extrabold text-2xl transition-colors duration-200 hover:bg-amber-400 hover:text-custom-red-dark">send</button>
            </form>
        </div>
    );
};

export default Contact;