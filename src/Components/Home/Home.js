import React, { useEffect, useState } from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Products from '../Products/Products';
import Calculation from '../Calculations/Calculation';

const Home = () => {
  const[products,setProducts]=useState([]);
  const[times,setTimes]=useState([]);

  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  const handleAddToCart=(time)=>{
    const timesArray=[...times, time];
    setTimes(timesArray);
  }


  return (
      <div className="main-body md:grid md:grid-cols-4 lg:grid lg:grid-cols-4">
    {/* the product div */}
    <div className='product-section md:col-span-2 lg:col-span-3 mx-auto '>
      {/* the logo continer */}
      <div className='flex gap-2 items-center logo-container'>
        <FontAwesomeIcon icon={faDumbbell}  className='text-4xl'/>
        <h1 className='text-4xl font-semibold'> STAY-FIT</h1>
      </div>
      {/* the product continer */}
      <div className=' mt-5'>
          <h1 className='text-2xl font-medium mb-5'>Select today's activity</h1>

          {/* Product showing map here */}
          <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-1 grid grid-cols-1  gap-5'>
          {products.map(product=>
          <Products 
          key={product._id} 
          product={product}
          handleAddToCart={handleAddToCart}>
           </Products>)}
          </div>
      </div>
    </div>

    {/* the cart div */}
    <div className='calculation-section md:col-span-2 lg:col-span-1'>
      <Calculation times={times}></Calculation>
    </div>

    </div>
  );
};

export default Home;