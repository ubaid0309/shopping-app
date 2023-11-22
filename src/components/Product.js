import React, { useState } from 'react'
import {addItem,removeItem} from '../redux/slices/CartSlice'
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
const Product = ({post}) => {
    const [isSelected , setIsSelected] = useState(false);
    const dispatch = useDispatch();

    function handleAddItem(){
      dispatch(addItem(post))
      setIsSelected(true);
      toast.success("Item added to Cart")
    }

    function handleRemoveItem(){
      dispatch(removeItem(post.id))
      setIsSelected(false);
      toast.error("Item removed from Cart");
    }

  return (
    <div className='product-card  flex flex-col  items-center justify-between p-4 gap-y-4 rounded-xl hover:scale-105 duration-150 border-2 border-[#00095]'>
        <p className='text-center text-green-700 font-semibold text-lg'>{post.title.length > 15 ? post.title.substr(0,17)+"..." : post.title}</p>

        <p className='text-justify mx-auto w-40 text-[10px] text-gray-400 '>{post.description.length>100 ? (post.description.substr(0,60)) + "..." : (post.description)}</p>

        <img className='w-32' src={post.image} alt="" />

        <div className='flex justify-between items-center w-full'>
            <p className='product-price text-green-600 font-semibold text-lg'>${post.price}</p>
            {
                isSelected ? 
                <button className='uppercase rounded-full text-black border-black  hover:bg-gray-700 text-xs py-1 font-semibold hover:text-white transition-all duration-200 px-2 border' onClick={()=> handleRemoveItem()}>remove item</button> :
                <button className='uppercase rounded-full text-black border-black  hover:bg-gray-700 text-xs font-semibold py-1  hover:text-white transition-all duration-200 px-2 border' onClick={()=> handleAddItem()}>add to card</button>
            }
        </div>
        
    </div>
  )
}

export default Product