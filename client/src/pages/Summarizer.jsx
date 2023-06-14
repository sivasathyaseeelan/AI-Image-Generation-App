import React from 'react'
import linkIcon from '../assets/link.svg' 

const Summarizer = () => {
  return (
    <section className='w-full'>
      <div className='flex flex-col w-full gap-2 justify-center items-center mt-20'>
      <form
          className='relative flex justify-center items-center w-full max-w-xl'
          onSubmit={()=>{}}
        >
        <img
          src={linkIcon}
          alt='link-icon'
          className='absolute left-0 my-2 ml-3 w-5'
        />

          <input
            type='url'
            placeholder='Paste the article link'
            onChange={()=>{}}
            onKeyDown={()=>{}}
            required
            className='block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow shadow-slate-700 font-medium focus:border-black focus:outline-none focus:ring-0 peer' // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
          />
          <button
            type='submit'
            className='hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 text-lg font-medium text-gray-400
            peer-focus:border-gray-700 peer-focus:text-gray-700 '
          >
            <p>↵</p>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Summarizer