import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CardItem from '../components/CardItem'
const Cart = () => {
  const cart = useSelector(state => state.cart.items)
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((accumulator , currentValue)=>{
      return accumulator + currentValue.price
    },0))
  },[cart])
  return (
    <div>
      {cart.length > 0 ? (
        <div className='flex gap-4 md:gap-0 flex-col md:flex-row max-w-6xl mx-auto justify-between p-4'>
          <div className='product-section w-[100%] md:w-[70%]'>
            {cart.map((item)=>{
              return <CardItem item={item} key={item.id}/>
            })}
            
          </div>

          <div className='check-out-section flex flex-col justify-between'>
            <div>
            <p className='uppercase text-green-700 text-3xl font-semibold'>your cart</p>
            <p className='uppercase text-green-700 text-5xl font-semibold'>summary</p>
            <p className='font-semibold text-xl '>Total Items : {cart.length}</p>
            </div>

            <div>
              <p className='font-semibold text-xl'>Total Amount : <span className='font-extrabold text-xl'>${totalAmount}</span></p>
              <button className='bg-[#16A34A] px-4 py-3 border border-[#16A34A] hover:bg-white duration-300 hover:text-[#16A34A] text-xl font-semibold text-white rounded-lg '>CheckOut Now</button>
            </div>
            
          </div>
        </div>
      ) :
        (
          <div className='flex flex-col justify-center items-center h-screen gap-1'>
            <p className='text-lg font-semibold'>Your Cart is Empty ! </p>
            <Link to="/">
              <button className='bg-[#16A34A] px-4 py-3 border border-[#16A34A] hover:bg-white duration-300 hover:text-[#16A34A] text-xl font-semibold text-white rounded-lg '>SHOP NOW</button>
            </Link>
          </div>)}

    </div>
  )
}

export default Cart