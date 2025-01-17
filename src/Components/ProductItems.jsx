/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'

function ProductItems({id,name,image,price}) {
    
    const {currency} = useContext(ShopContext)

    return (
    <Link className='text-gray-700 cursor-pointer' to={`/Product/${id}`}>
        <div className='overflow-hidden '>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt=''/>
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium '>{currency}{price}</p>
    </Link>
  )
}

export default ProductItems