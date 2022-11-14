import React from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = () => {
  return (
    <div>
      <h1 className='text-xl font-medium mt-2'>Exercise Details</h1>
      <div className="exercise-time flex justify-between mt-2 p-4 px-10 rounded-xl">
        <h1 className='text-xl font-medium'>Exercise time</h1>
        <h3 className='text-lg font-medium text-opacity-80 mr-8'>0 min</h3>
      </div>
      <div className="break-time flex justify-between mt-2 p-4 px-10 rounded-xl">
        <h1 className='text-xl font-medium'>Break time</h1>
        <h3 className='text-lg font-medium text-opacity-80 mr-8'>0 min</h3>
      </div>
    </div>
  );
};

export default ExerciseDetails;