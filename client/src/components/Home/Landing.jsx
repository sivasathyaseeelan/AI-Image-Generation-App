import React from 'react'

const Landing = () => {
  return (
    <div className='h-[90vh] w-full flex flex-col gap-3 justify-center items-center'>
      <h1 className=' p-2 md:max-w-[850px] text-center text-[#121212] text-3xl md:text-5xl font-bold '>This is an <span className='text-gradient-blue-via-purple'>OpenAI powered</span> webpage and blog Summarizer</h1>
      <p className='max-w-[500px] text-center text-gray-600'>Simplify your reading with summarizer, an article, blog, webpage summarizer
        that transforms lengthy articles into clear and concise summaries</p>
    </div>
  )
}

export default Landing