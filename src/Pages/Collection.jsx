/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ProductItems from '../Components/ProductItems';

function Collection() {

  const {products} = useContext(ShopContext)
  const [FemaleCollecion,setFemaleCollecion] = useState([])
  
    useEffect(() => {
          const FemaleProduct = products.filter((item) => item.category === "Women");
          setFemaleCollecion(FemaleProduct);
      }, []);
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
              FemaleCollecion.map((item, index) => (
                    <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
  )
}

export default Collection
