/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducs from '../Components/RelatedProducs';

function Product() {

  const {ProductId} = useParams();
  const {products, currency,AddtoCart} = useContext(ShopContext);
  const [ProductData, setProductData] = useState(false);
  const [Image, setImage] = useState('')
  const [Size, setSize] = useState('')
  
  const FetchProductData = async () => {
    products.map((items) => {
      if (items._id === ProductId) {
        setProductData(items);
        setImage(items.image[0])
        return null;
      }
    })
  }
  useEffect(() => {
    FetchProductData();
  },[ProductId])

  return ProductData ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:jusify-normal sm:w-[18.7%] w-full'>
            {
              ProductData.image.map((items, index)=>(
                <img onClick={() => setImage(items)} src={items} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt=''/>
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={Image} className='w-full h-auto' alt='' />
          </div>
        </div>

        {/* product info */}

        <div className='flex-1  '>
          <h1 className='flex items-center font-medium text-2xl mt-2'>{ProductData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className='w-3.5 ' src={assets.star_icon} alt='' />
            <img className='w-3.5 ' src={assets.star_icon} alt='' />
            <img className='w-3.5 ' src={assets.star_icon} alt='' />
            <img className='w-3.5 ' src={assets.star_icon} alt='' />
            <img className='w-3.5 ' src={assets.star_dull_icon} alt='' />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='flex items-center mt-5 text-3xl font-medium'>{currency}{ProductData.price}</p>
          <p className='flex items-center mt-5 text-gray-500 md:w-4/5' >{ProductData.description}</p>
          <div className='flex flex-col gap-4 my-6'>
            <p className='flex items-center'>Select Size</p>
            <div className='flex gap-2'>
              {ProductData.sizes.map((items, index) => (
                <button onClick={() => setSize(items)} className={`border py-2 px-4 bg-gray-100 ${items === Size ? 'border-orange-500' : '' }`} key={index}>{items}</button>
              ))}
            </div>
          </div>
          <button onClick={() => {AddtoCart(ProductData._id,Size)}} className='flex items-center bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className=' text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p className='flex items-center'>100% Original product.</p>
              <p className='flex items-center'>Cash on delivery is available on this product.</p>
              <p className='flex items-center'>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description and review */}
      <div className='m-20'>
        <div className='flex '>
          <p className='border px-5 py-3 ext-sm'>Description</p>
          <p className='border px-5 py-3 ext-sm'>Review (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p >An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p >E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>    
        </div>

        {/* displlay relatted products */}
        <RelatedProducs Category={ProductData.category} SubCategory={ProductData.subCategory} />
      </div>

      
    </div>
  ): <div className='opacity-0'></div>
}

export default Product