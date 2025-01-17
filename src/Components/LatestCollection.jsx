/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems';
function LatestCollection() {
    
    const {products} = useContext(ShopContext);
    
    const [LatestProduct, setLatestProduct] = useState([])

    useEffect(() => {
        setLatestProduct(products.slice(0,10));
    },[])
    return (
    <div className='my-10' >
        <div className='text-center py-8 text-3xl'>
            <Title text1={"LATEST"}  text2={"COLLECTTION"}/>
            <p className='w-3/4 m-auto text-xs sm:tex-sm md:text-base text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            
        </div> 

        {/* RENDERING PRODUCTS  */}
        {/* <div className='grid grid-col-2 sm:grid-col-3 md:grid-col-4 lg:grid-col-5 gap-4 gap-y-6'>
            {
                LatestProduct.map((item,index) => {
                    <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                })
            }
        </div> */}\
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                LatestProduct.map((item, index) => (
                    <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection