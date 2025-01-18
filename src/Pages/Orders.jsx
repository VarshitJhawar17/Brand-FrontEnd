/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title'

function Orders() {
  
  const {products , currency} = useContext(ShopContext)

  return (
    <div className='bprder-t pt-16'>
      <div className='flex items-center  text-2xl'>
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div className=''>
        {
          products.slice(1,4).map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img src={item.image[0]} alt='' className='w-16 sm:w20'/>
                <div >
                  <p className='tex-base fontt-medium'>{item.name}</p>
                  <div className='flex items-center text-base text-gray-700 mt-2 gap-3'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p>Date: <span className='ttext-gray-400'>17, NOV 2005</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm text-base'>Ready tto ship </p>
                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm '>Track Order</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders