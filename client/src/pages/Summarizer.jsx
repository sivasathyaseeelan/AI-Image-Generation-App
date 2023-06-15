import React, { useState } from 'react';
import linkIcon from '../assets/link.svg';

const Summarizer = () => {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/api/processText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      // const data = await response.json();
      // setResult(data.result);

      // Clear the form
      setUserInput('');
    } catch (error) {
      console.log(error);
    }

    console.log(JSON.stringify({ userInput }));
  };

  return (
    <section className='w-full'>
      <div className='flex flex-col w-full gap-2 justify-center items-center mt-20'>
        <form
          className='relative flex justify-center items-center w-full max-w-xl'
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt='link-icon'
            className='absolute left-0 my-2 ml-3 w-5'
          />

          <input
            type='url'
            placeholder='Paste the article link'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            required
            className='block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow shadow-slate-700 font-medium focus:border-black focus:outline-none focus:ring-0 peer'
          />
          <button
            type='submit'
            className='hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 text-lg font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:text-gray-700 '
          >
            <p>↵</p>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Summarizer;
