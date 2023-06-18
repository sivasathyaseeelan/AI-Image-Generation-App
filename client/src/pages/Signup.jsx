import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc"
import { BiHide } from "react-icons/bi"

const Signup = () => {

  const [Email,setEmail] = useState('')
  const [Password,setPassword] = useState('')
  const [RepeatPassword,setRepeatPassword] = useState('')
  const [ShowPassword1,setShowPassword1] = useState(false)
  const [ShowPassword2,setShowPassword2] = useState(false)

  const handleSubmit = () => {
    
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center min-h-[90vh] gap-1'>
        <h1 className='text-3xl font-semibold pb-3'>Sign up</h1>
        <form
         className='flex flex-col gap-2 w-full max-w-xs md:max-w-sm'
         onSubmit={handleSubmit}>
          <div className='relative flex justify-center items-center'>
            <input
            type='email' 
            placeholder='Email'
            value={Email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required
            className='shadow shadow-slate-700 rounded p-2 w-full max-w-xs md:max-w-sm'
            />
          </div>
          <div className='relative flex justify-center items-center'>
            <input
            type={ShowPassword1 ? 'text' : 'password'} 
            placeholder='Password'
            value={Password}
            onChange={(e)=>{setPassword(e.target.value)}}
            required
            className='shadow shadow-slate-700 rounded p-2 w-full max-w-xs md:max-w-sm'
            />
            <button className='absolute right-0 px-3' onClick={()=>{setShowPassword1(!ShowPassword1)}}><BiHide size={20} /></button>
          </div>
          <div className='relative flex justify-center items-center'>
            <input
            type={ShowPassword2 ? 'text' : 'password'} 
            placeholder='Repeat Password'
            value={RepeatPassword}
            onChange={(e)=>{setRepeatPassword(e.target.value)}}
            required
            className='shadow shadow-slate-700 rounded p-2 w-full max-w-xs md:max-w-sm'
            />
            <button className='absolute right-0 px-3' onClick={()=>{setShowPassword2(!ShowPassword2)}}><BiHide size={20} /></button>
          </div>
          <button
           type='submit'
           className='bg-[#121212] text-white p-2 rounded hover:bg-black'>
            Sign up
          </button>
        </form>
        <p>or</p>
        <button className='flex justify-center items-center gap-3 bg-sky-500 hover:bg-sky-600 rounded w-full text-white p-2 max-w-xs md:max-w-sm'><FcGoogle size={20} /> Sign in with google</button>
        <span><a href='./Signin'>Registered Already? Sign in</a></span>
      </div>
    </div>
  )
}

export default Signup