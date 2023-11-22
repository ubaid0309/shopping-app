import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product'
const Home = () => {
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const API_URL = 'https://fakestoreapi.com/products';

    async function fetchProductData(){
        setLoading(true);
        try {
            const result = await fetch(API_URL);
            const jsonData = await result.json();
            setPosts(jsonData);
        }
        catch(err){
            console.log("Failed to fetch product data" + err.message);
            setPosts([]);
        }
        setLoading(false);
        
        
    }

    useEffect(()=>{
        fetchProductData();
    },[])
  return (
    <div>
        {
            loading ? (<div className='h-screen flex justify-center items-center'><Spinner/></div>) :

            

            (<div className='all-products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto p-10'>
                {
                    posts.map((post)=>(
                        <Product key={post.id} post={post}/>
                    ))
                }
            </div>)
        }
    </div>
  )
}

export default Home