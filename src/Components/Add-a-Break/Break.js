import React from 'react';
import './Break.css'

const Break = () => {
  return (
    <div>
      <h1 className='text-xl font-medium mt-2'> Add A Break</h1>
      <div className='break-btn-div flex justify-around '>
        <button className='break-btn text-xl font-medium rounded-full p-3  '>1m</button>
        <button className='break-btn text-xl font-medium rounded-full p-3  '>2m</button>
        <button className='break-btn text-xl font-medium rounded-full p-3  '>3m</button>
        <button className='break-btn text-xl font-medium rounded-full p-3  '>4m</button>
        <button className='break-btn text-xl font-medium rounded-full p-3  '>5m</button>
      </div>
    </div>
  );
};

export default Break;