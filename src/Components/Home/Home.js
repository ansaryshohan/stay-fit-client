import React, { useEffect, useState } from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Products from '../Products/Products';
import Calculation from '../Calculations/Calculation';

const Home = () => {
  const[products,setProducts]=useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])


  return (
      <div className="main-body">
    {/* the product div */}
    <div>
      {/* the logo continer */}
      <div className='flex gap-2 items-center'>
        <FontAwesomeIcon icon={faDumbbell}  className='text-4xl'/>
        <h1 className='text-4xl font-semibold'> STAY-FIT</h1>
      </div>
      {/* the product continer */}
      <div className=' mt-3'>
          <h1 className='text-2xl font-medium'>Select today's activity</h1>
          <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1  gap-5'>
          {products.map(product=><Products key={product._id} product={product}></Products>)}
          </div>
      </div>
    </div>

    {/* the cart div */}
    <div>
      <Calculation></Calculation>
    </div>

    </div>
  );
};

export default Home;