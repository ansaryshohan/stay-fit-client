import React from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = ({times, breakTimes}) => {

  let totalTime=0;
  for(const time of times){
    totalTime=totalTime+time;
  }
  let BreakTime=0;
  for(const breakTime of breakTimes){
    BreakTime=breakTime;
  }
  return (
    <div>
      <h1 className='text-xl font-medium mt-2'>Exercise Details</h1>
      <div className="exercise-time flex justify-between mt-2 p-4 px-10 rounded-xl">
        <h1 className='text-xl font-medium'>Exercise time</h1>
        <h3 className='text-lg font-medium text-opacity-80 mr-8'>{totalTime} min</h3>
      </div>
      <div className="break-time flex justify-between mt-2 p-4 px-10 rounded-xl">
        <h1 className='text-xl font-medium'>Break time</h1>
        <h3 className='text-lg font-medium text-opacity-80 mr-8'>{BreakTime} min</h3>
      </div>
    </div>
  );
};

export default ExerciseDetails;