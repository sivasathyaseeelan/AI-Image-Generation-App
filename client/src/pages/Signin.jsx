import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc"
import { BiHide } from "react-icons/bi"
import { useGoogleLogin } from '@react-oauth/google';


const Signin = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [ShowPassword,setShowPassword] = useState(false)

  // const Value = {
  //   Email : Email,
  //   Password : Password,
  // }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      window.location.href = '/Summarizer'
    }
  },[])


  const resetForm = () => {
    setEmail('');
    setPassword('');
  }

  const handleLogin = async (tokenResponse) => {
    const response = await fetch('http://127.0.0.1:5000/user/Signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				tokenResponse
			}),
		})

    const data = await response.json()
    console.log(data)
		if (data.token) {
      console.log(data.token)
			localStorage.setItem('token', data.token)
		} else {
			alert('Please check your username and password')
		}

    if(localStorage.getItem('token')){
      window.location.href = '/Summarizer'
    }


    resetForm();
  }

  const login = useGoogleLogin({
    onSuccess: tokenResponse => handleLogin(tokenResponse),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    //interaction with API
    const response = await fetch('http://127.0.0.1:5000/user/Signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

    const data = await response.json()
    console.log(data)
		if (data.token) {
      console.log(data.token)
			localStorage.setItem('token', data.token)
		} else {
			alert('Please check your username and password')
		}

    if(localStorage.getItem('token')){
      window.location.href = '/Summarizer'
    }


    resetForm();
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center min-h-[90vh] gap-1'>
        <h1 className='text-3xl font-semibold pb-3'>Sign in</h1>
        <form
         className='flex flex-col gap-2 w-full max-w-xs md:max-w-sm'
         onSubmit={handleSubmit}>
          <div className='relative flex justify-center items-center'>
            <input
            type='email' 
            placeholder='Email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required
            className='shadow shadow-slate-700 rounded p-2 w-full max-w-xs md:max-w-sm'
            />
          </div>
          <div className='relative flex justify-center items-center'>
            <input
            type={ShowPassword ? 'text' : 'password'} 
            placeholder='Password'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            required
            className='shadow shadow-slate-700 rounded p-2 w-full max-w-xs md:max-w-sm'
            />
            <button className='absolute right-0 px-3' onClick={()=>{setShowPassword(!ShowPassword)}}><BiHide size={20} /></button>
          </div>
          <button
           type='submit'
           className='bg-[#121212] text-white p-2 rounded hover:bg-black'>
            Sign in
          </button>
        </form>
        <p>or</p>
        <button
         className='flex justify-center items-center gap-3 bg-sky-500 hover:bg-sky-600 rounded w-full text-white p-2 max-w-xs md:max-w-sm'
         onClick={() => login()}>
          <FcGoogle size={20} /> Sign in with google
         </button>
        <span><a href='./Signup'>Not registered yet? Sign up</a></span>
      </div>
    </div>
  )
}

export default Signin