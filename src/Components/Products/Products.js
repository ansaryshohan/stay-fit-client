import React from 'react';
import './Products.css';

const Products = (props) => {
  const{handleAddToCart, product}=props;
  const{picture,age,name,about,time}=product;

  return (
    <div className='p-3 product-card rounded-xl flex flex-col gap-2 mt-3'>
      
      <img src={picture} alt="" className='w-full h-2/3 rounded-xl py-1' />

      <div className='px-6 flex flex-col gap-2'>
      <h1 className='text-2xl font-medium'>{name}</h1>
      <p>{about.slice(0,150)} ...</p>
      <h3 className='text-xl font-medium'>For Age: {age}</h3>
      <h3 className='text-xl font-medium'>Time required: {time} minutes</h3>
      </div>

      <button onClick={()=>handleAddToCart(time)}  className='btn-card w-11/12 py-3 rounded mx-auto text-white text-2xl font-semibold'>Add to list</button>
    </div>
  );
};

export default Products;