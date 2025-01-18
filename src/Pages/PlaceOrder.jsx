// /* eslint-disable no-unused-vars */
// import React from 'react'
// import Title from '../Components/Title'
// import CartTotal from '../Components/CartTotal'

// function PlaceOrder() {
//   return (
//     <div className='flex flex-col sm:flex-row  justify-between gap-4 pt-5 sm:pt-5 min-h-[80vh]'>
//       {/* leftt side */}
//       <div className='flex flex-col gap-4 w-full sm:max-w[480px]'>
//         <div className='flex items-center text-xl sm:text-2xl my-3'>
//           <Title text1={"DELIVERY"} text2={"INFORMATION"} />
//         </div>
//         <div className='flex gap-3'>
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First name'/>
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last name'/>
//         </div>
//         <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email address'/>
//         <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street'/>
//         <div className='flex gap-3'>
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City'/>
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State'/>
//         </div>
//         <div className='flex gap-3'>
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Zip code'/>
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Counry'/>
//         </div>
//         <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone'/>
//       </div> 
//       <CartTotal />
//     </div>
//   )
// }

// export default PlaceOrder
























/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaGooglePay, FaPaypal, FaCashRegister } from 'react-icons/fa';
import { SiPhonepe, SiPaytm } from 'react-icons/si';
import { BsBank } from 'react-icons/bs';
import Title from '../Components/Title';
import CartTotal from '../Components/CartTotal';

function PlaceOrder() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-6 pt-5 min-h-screen">
      {/* Left Side: Delivery Information */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl font-bold mb-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            className="border border-gray-300 rounded py-2 px-3 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-gray-300 rounded py-2 px-3 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-2 px-3 w-full"
          type="email"
          placeholder="Email address"
        />
        <input
          className="border border-gray-300 rounded py-2 px-3 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            className="border border-gray-300 rounded py-2 px-3 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-2 px-3 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            className="border border-gray-300 rounded py-2 px-3 w-full"
            type="number"
            placeholder="Zip code"
          />
          <input
            className="border border-gray-300 rounded py-2 px-3 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-2 px-3 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>

      {/* Right Side: Payment Gateway */}
      <div className="flex flex-col gap-6 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl font-bold mb-3">
          <Title text1="PAYMENT" text2="METHOD" />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div
            className={`flex items-center gap-4 p-4 rounded-lg border shadow-sm hover:shadow-md cursor-pointer transition ${
              selectedPaymentMethod === 'paytm' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-300'
            }`}
            onClick={() => handlePaymentSelection('paytm')}
          >
            <SiPaytm className="text-blue-500 text-3xl" />
            <span className="font-medium text-lg">Paytm</span>
          </div>

          <div
            className={`flex items-center gap-4 p-4 rounded-lg border shadow-sm hover:shadow-md cursor-pointer transition ${
              selectedPaymentMethod === 'gpay' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-300'
            }`}
            onClick={() => handlePaymentSelection('gpay')}
          >
            <FaGooglePay className="text-blue-500 text-3xl" />
            <span className="font-medium text-lg">Google Pay</span>
          </div>

          <div
            className={`flex items-center gap-4 p-4 rounded-lg border shadow-sm hover:shadow-md cursor-pointer transition ${
              selectedPaymentMethod === 'phonepe' ? 'bg-purple-50 border-purple-500' : 'bg-white border-gray-300'
            }`}
            onClick={() => handlePaymentSelection('phonepe')}
          >
            <SiPhonepe className="text-purple-500 text-3xl" />
            <span className="font-medium text-lg">PhonePe</span>
          </div>

          <div
            className={`flex items-center gap-4 p-4 rounded-lg border shadow-sm hover:shadow-md cursor-pointer transition ${
              selectedPaymentMethod === 'netbanking' ? 'bg-green-50 border-green-500' : 'bg-white border-gray-300'
            }`}
            onClick={() => handlePaymentSelection('netbanking')}
          >
            <BsBank className="text-green-500 text-3xl" />
            <span className="font-medium text-lg">Net Banking</span>
          </div>

          <div
            className={`flex items-center gap-4 p-4 rounded-lg border shadow-sm hover:shadow-md cursor-pointer transition ${
              selectedPaymentMethod === 'cod' ? 'bg-green-50 border-green-500' : 'bg-white border-gray-300'
            }`}
            onClick={() => handlePaymentSelection('cod')}
          >
            <FaCashRegister className="text-green-500 text-3xl" />
            <span className="font-medium text-lg">Cash on Delivery (COD)</span>
          </div>
        </div>

        <button
          className="mt-6 w-full py-3 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition"
          onClick={() => {
            if (selectedPaymentMethod) {
              alert(`You have selected: ${selectedPaymentMethod}`);
            } else {
              alert('Please select a payment method before proceeding.');
            }
          }}
        >
          Confirm and Place Order
        </button>

        <div className="mt-6">
          <CartTotal />
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
