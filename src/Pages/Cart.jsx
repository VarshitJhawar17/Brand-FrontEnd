 
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../Components/CartTotal'

function Cart() {

  const {products , currency, CartItem, UpdateQuantity} = useContext(ShopContext)

  const [CartData, setCartData] = useState([])
  useEffect(() => {
    const tempData = [];
    for(const items in CartItem){
      for (const item in CartItem[items]){
        if (CartItem[items][item] > 0 ){
          tempData.push({
            _id: items,
            size: item,
            quantity: CartItem[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  },[CartItem])
  return (
    <div className='border-t pt-14' >
      <div className='ttext-2xl mb-3'>
        <Title text1={"YOUR"} text2={"CART"}/>

      </div>
      <div className=''>
        {
          CartData.map((item, index) => {
            const ProductData = products.find((product) => product._id === item._id );

            return (
              <div key={index} className='py-4 border-t border-b textt-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr_] items-center gap-4'>
                <div className='flex items-star gap-6'>
                  <img src={ProductData.image[0]} className='w-16 sm:w-20' alt=''/>
                  <div>
                    <p className='text-sm sm:text-lg font-medium'>{ProductData.name}</p>
                    <div className='flex items-center gap-5 -2'>
                      <p>{currency}{ProductData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e) => {e.target.value === '' || e.target.value === '0' ? null : UpdateQuantity(item._id,item.size,Number(e.target.value))}} type='number' min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-2' />
                <img onClick={() => UpdateQuantity(item._id,item.size,0)} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' alt=''/>
              </div>
            )
          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
        </div>
      </div>
    </div>
  )
}

export default Cart