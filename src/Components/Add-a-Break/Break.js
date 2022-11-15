import React from 'react';
import './Break.css'

const Break = ({handleBreakTime}) => {
  return (
    <div>
      <h1 className='text-xl font-medium mt-2'> Add A Break</h1>

      <div className='break-btn-div flex justify-around '>
        <button onClick={()=>handleBreakTime(1)} className='break-btn text-xl font-medium rounded-full p-3'><span>1</span>m</button>
        <button onClick={()=>handleBreakTime(2)} className='break-btn text-xl font-medium rounded-full p-3'><span>2</span>m</button>
        <button onClick={()=>handleBreakTime(3)} className='break-btn text-xl font-medium rounded-full p-3'><span>3</span>m</button>
        <button onClick={()=>handleBreakTime(4)} className='break-btn text-xl font-medium rounded-full p-3'><span>4</span>m</button>
        <button onClick={()=>handleBreakTime(5)} className='break-btn text-xl font-medium rounded-full p-3'><span>5</span>m</button>
      </div>
    </div>
  );
};

export default Break;