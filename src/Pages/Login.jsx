/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Login() {

  const [CurrentState,setCurrentState] = useState('Sign Up')
  const onSubmitHandler = async (e) => {
    e.preventDefault
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90% sm:max-w-96 m-auto mt-14 gap-4 text-gray-500]'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{CurrentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {CurrentState === 'Log In' ? '' :<input required type='text' className='w-full px-3 py-2 border border-gray-600' placeholder='Name'  />}
      <input required type='email' className='w-full px-3 py-2 border border-gray-600' placeholder='Email'  />
      <input required type='password' className='w-full px-3 py-2 border border-gray-600' placeholder='Password'  />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {CurrentState === 'Log In' ? <p onClick={() => {setCurrentState('Sign Up')}} className='cursor-pointer'>Create account</p> : <p onClick={() => {setCurrentState('Log In')}} className='cursor-pointer'>Login here</p>}
      </div>
      <button  className='bg-black text-white font-light px-8 py-2 mt-4' >{CurrentState === 'Log In' ? 'Sign In' : 'Sign Up'}</button>

    </form>
  )
}

export default Login