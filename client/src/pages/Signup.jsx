import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc"
import { BiHide } from "react-icons/bi"
import { useGoogleLogin } from '@react-oauth/google'

const Signup = () => {

  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [repeatPassword,setRepeatPassword] = useState('')
  const [ShowPassword1,setShowPassword1] = useState(false)
  const [ShowPassword2,setShowPassword2] = useState(false)

  // const Value = {
  //   firstName : firstName,
  //   lastName : lastName,
  //   email : Email,
  //   password : Password,
  //   RepeatPassword : RepeatPassword,
  // }

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRepeatPassword('');
  }

  const handleLogin = async (tokenResponse) => {
    const response = await fetch('http://127.0.0.1:5000/user/Signin', {
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

	// if (data.status === 'ok') {
	// 	localStorage.setItem('token', data.user)
	// 	alert('Successfully signed up')
	// 	window.location.href = '/Summarizer'
	// }
  }

  const login = useGoogleLogin({
    onSuccess: tokenResponse => handleLogin(tokenResponse),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      email,
      password,
      firstName,
      lastName
    })
    
    //interaction with API
    const response = await fetch('http://127.0.0.1:5000/user/Signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
        firstName,
        lastName
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			localStorage.setItem('token', data.user)
			alert('Successfully signed up')
			window.location.href = '/Summarizer'
		}


    resetForm();
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center min-h-[90vh] gap-1'>
        <h1 className='text-3xl font-semibold pb-3'>Sign up</h1>
        <form
         className='flex flex-col gap-2 w-full max-w-xs md:max-w-sm'
         onSubmit={handleSubmit}>
          <div className='relative flex justify-evenly items-center w-full gap-1'>
            <input
            type='text' 
            placeholder='First Name'
            value={firstName}
            onChange={(e)=>{setFirstName(e.target.value)}}
            required
            className='shadow shadow-slate-700 w-[80%] rounded p-2'
            />
            <input
            type='text' 
            placeholder='Last Name'
            value={lastName}
            onChange={(e)=>{setLastName(e.target.value)}}
            required
            className='shadow shadow-slate-700 w-[80%] rounded p-2'
            />
            </div>
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
            type={ShowPassword1 ? 'text' : 'password'} 
            placeholder='Password'
            value={password}
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
            value={repeatPassword}
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
        <button
         className='flex justify-center items-center gap-3 bg-sky-500 hover:bg-sky-600 rounded w-full text-white p-2 max-w-xs md:max-w-sm'
         onClick={() => login()}>
          <FcGoogle size={20} /> Sign in with google
        </button>
        <span><a href='./Signin'>Registered Already? Sign in</a></span>
      </div>
    </div>
  )
}

export default Signup