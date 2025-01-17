/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems'

function BesSeller() {
    const {products} = useContext(ShopContext)
    const [BestSeller,setBestSeller] = useState([])
    // useEffect(() => {
    //     const BestProduct = products.filter((item) => {item.BesSeller})
    //     setBestSeller(BestProduct.slice(0,5))
    // },[])

    useEffect(() => {
        // console.log('Products:', products); // Log products for debugging
        const BestProduct = products.filter((item) => item.bestseller);
        // console.log('Filtered Best Sellers:', BestProduct); // Log filtered products
        setBestSeller(BestProduct.slice(0, 5));
    }, []);
  return (
    <div className='mmy-10'>
        <div className='tex-center text-3xl py-8'>
            <Title text1={"BEST" } text2={"SELLER"} />
            <p className='w-3/4 m-auto tet-xs sm:text-sm md:ttext-base textt-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                BestSeller.map((item, index) => (
                    <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>

    </div>
  )
}

export default BesSeller