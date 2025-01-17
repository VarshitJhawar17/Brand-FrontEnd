/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt='' />
                <p className='w-full mb:w-2/3 text-gray-600 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
                <p className='ext-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>
            <div>
                <p className='tex-xl font-medium mb-5'>
                    GET IN TOUCH
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 00000 00000</li>
                    <li>example@gmail.com</li>
                    <a 
                        href="https://www.instagram.com/shreeshaasisters?igsh=aGp4bTFoNG1yM2d1"
                        target="_blank">INSTAGRAM</a>
                </ul>
            </div>
        </div>
        <div >
            <hr />
            <p className='py-5 text-sm ext-center'>Copyright 2025 For ---- All  right reserver</p>
        </div>
    </div>
  )
}

export default Footer