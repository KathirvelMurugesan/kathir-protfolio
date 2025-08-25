import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs
      .sendForm('service_5dx21w9', 'template_xajm7ao', form.current, {
        publicKey: 'b7eEnNOs8eO8Nuqqv',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus('success');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus('error');
        }
      );
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-10 bg-white/5 rounded-xl shadow-lg sm:scale-90 hover:scale-95 duration-200">
      <h1 className='text-6xl font-sans text-blue-500 pb-4 ml-[23%]'>Contact me</h1>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <label className="text-blue-600 font-semibold">Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="p-3 rounded-md border bg-white/10 text-white"
          placeholder="Your full name"
        />

        <label className="text-blue-600 font-semibold">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="p-3 rounded-md border bg-white/10 text-white"
          placeholder="Your email address"
        />

        <label className="text-blue-600 font-semibold">Description</label>
        <input
          type="text"
          name="description"
          required
          className="p-3 rounded-md border bg-white/10 text-white"
          placeholder="Short description (e.g., Bug Report)"
        />

        <label className="text-blue-600 font-semibold">Message</label>
        <textarea
          name="message"
          rows="4"
          required
          className="p-3 rounded-md border bg-white/10 text-white"
          placeholder="Write your message..."
        />

        

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-400">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400">Something went wrong. Try again.</p>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
