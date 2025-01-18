// /* eslint-disable no-unused-vars */
// import React from 'react'
// import Title from '../Components/Title'
// import { assets } from '../assets/assets'

// function Contact() {
//   return (
//     <div>
//       <div className='text-center text-2xl pt-10 border-t'>
//         <Title text1={"CONTACT"} text2={"US"}/>
//       </div>
//       <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
//         <img className='w-full mb:max-w-[480px]' src={assets.contact_img} alt='' />
//         <div className="flex flex-col justify-center items-start gap-6">
//           <p className='font-semibold text-xl text-gray-600'>Our Store</p>
//           <p className='text-gray-500'>000000 ------ ------ <br /> --- 000, --------, India</p>
//           <p className='etxt-gray-500'>00000 00000</p>
//           <p className='ttext-gray-500'>dumy@gmail.com</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact



/* eslint-disable no-unused-vars */
import React from 'react';
import Title from '../Components/Title';
import { assets } from '../assets/assets';

function Contact() {
  return (
    <div>
      {/* Title Section */}
      <div className="text-center text-5xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Main Content Section */}
      <div className="my-10 flex flex-col md:flex-row md:items-start md:justify-center gap-10 mb-28">
        {/* Image Section */}
        <img
          className="w-full max-w-[480px] md:w-1/2"
          src={assets.contact_img}
          alt="Contact"
        />

        {/* Text Section */}
        <div className="flex flex-col items-start md:w-1/2 gap-6">
          {/* Store Details */}
          <p className="font-semibold text-4xl text-gray-600">Our Store</p>
          <p className="text-gray-500 text-xl"> 000 000, --- ---<br />--- 000, ---------</p>
          <p className="text-gray-500 text-xl">Tel: +91 00000 00000</p>
          <p className="text-gray-500 text-xl">Email: dummy@forever.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
