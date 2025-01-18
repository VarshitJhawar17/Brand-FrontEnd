/* eslint-disable no-empty */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify/unstyled";
import Product from "../Pages/Product";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "₹";
    const delivery_fee = 10;
    const [CartItem, setCartItem] = useState({});
    const navigate = useNavigate()
    const AddtoCart = async (ItemId, ProductsSize) => {

        // if(!ProductsSize){
        //     console.log('error')
        //     toast.error('Select Size')
        //     return;
        // }

        if (!ProductsSize) {
            alert('Select Size'); // Temporary debug
            return;
        }
        

        let CartData = structuredClone(CartItem)

        if (CartData[ItemId]) {
            if(CartData[ItemId][ProductsSize]){
                CartData[ItemId][ProductsSize] += 1
            }
            else{
                CartData[ItemId][ProductsSize] = 1;
            }
        }
        else{
            CartData[ItemId] = {};
            CartData[ItemId][ProductsSize] = 1
        }
        setCartItem(CartData)
    } 

    const GetCartAmount = () => {
        let TotalAmount = 0;
        for(const items in CartItem){
            let itemInfo = products.find((Product) => Product._id ===items)
            for(const item in CartItem[items]){
                try{
                    if(CartItem[items][item] > 0){
                        TotalAmount += itemInfo.price * CartItem[items][item]
                    }
                    
                }catch(error){

                }
            }
        }
        return TotalAmount
    }
    const GetCartCount = () => {
        let TotalCount = 0
        for(const items in CartItem){
            for(const item in CartItem[items]){
                try{
                    if(CartItem[items][item] > 0){
                        TotalCount +=CartItem[items][item]
                    }
                }catch(error){

                }
            }
        }
        return TotalCount
    }

    const UpdateQuantity = async (ItemId, Size, Quantity) => {
        let CartData = structuredClone(CartItem)
        CartData[ItemId][Size] = Quantity;
        setCartItem(CartData)
    }

    const value = {
        products , currency,  delivery_fee, CartItem, AddtoCart, GetCartCount, UpdateQuantity, GetCartAmount,navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;