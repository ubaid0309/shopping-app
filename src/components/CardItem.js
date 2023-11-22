import React from 'react'
import {MdDeleteSweep} from "react-icons/md"
import { removeItem } from '../redux/slices/CartSlice'
import { useDispatch } from 'react-redux'
const CardItem = ({item}) => {
    const dispatch = useDispatch();
  return (
    <div className='border-b-2 border-gray-600 p-4 '>
    <div className='flex flex-col lg:flex-row justify-between w-full'>
        <div className='cart-product-image w-[30%] md:w-[20%]'>
            <img className='w-full ' src={item.image} alt="" />
        </div>

        <div className='flex flex-col gap-4'>
            <p className='text-xl text-gray-800 font-semibold'>{item.title}</p>

            <p className='text-base text-gray-700'>{item.description.length > 100 ? item.description.substr(0,60) + "..." : item.description}</p>

            <div className='flex justify-between items-center '>
                <p className='text-green-600 text-xl  font-semibold'>${item.price}</p>

                <button className='text-red-500 bg-red-200 rounded-full p-2 text-2xl' onClick={()=>dispatch(removeItem(item.id))}><MdDeleteSweep/></button>

            </div>
        </div>
    </div>
    </div>
  )
}

export default CardItem