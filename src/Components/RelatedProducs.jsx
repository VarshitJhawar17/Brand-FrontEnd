/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */
// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../Context/ShopContext'
// import Title from "./Title"
// import ProductItems from "./ProductItems"
// function RelatedProducs({Category, SubCategory}) {

//     const {products} = useContext(ShopContext)
//     const [Related, setRelated] = useState([])

//     useEffect(() => {
//         if(products.length > 0){
//             let productsCopy = products.slice();
//             productsCopy = productsCopy.filter((item) => Category === item.category)
//             productsCopy = productsCopy.filter((item ) => SubCategory === item.SubCategory)

//             setRelated(productsCopy.slice(0,5))
//         }
//     },[products])

//   return (
//     <div className='my-24'>
//         <div className='text-center text-3xl py-2'>
//             <Title text1={"RELATED"} text2={"PRODUCTS"} />
//         </div>
//         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//             {
//                 Related.map((item, index) => (
//                     <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
//                 ))
//             }
//         </div>
//     </div>
//   )
// }

// export default RelatedProducs










/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItems from "./ProductItems";

function RelatedProducs({ Category, SubCategory }) {
  const { products } = useContext(ShopContext);
  const [Related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0 && Category && SubCategory) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => Category === item.category);
      productsCopy = productsCopy.filter((item) => SubCategory === item.subCategory);

      setRelated(productsCopy.slice(0, 5)); // Limit to 5 related products
    }
  }, [products, Category, SubCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {Related.map((item, index) => (
          <ProductItems
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducs;
