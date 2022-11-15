
import React, { useState } from 'react';
import Break from '../Add-a-Break/Break';
import ExerciseDetails from '../Exercise-details/ExerciseDetails';
import ProfileDetails from '../Profile-Details/ProfileDetails';
import './Calculation.css';

const Calculation = ({times}) => {
   const[breakTimes, setBreakTimes]=useState([]);
  const handleBreakTime=(breaktime)=>{
    const breakTimesArray=[...breakTimes, breaktime];
    setBreakTimes(breakTimesArray);
  }
  return (
    <div className='sticky top-0'>
      <div className='flex flex-col gap-5 p-5 sticky top-0'>
      <ProfileDetails></ProfileDetails>
      <Break handleBreakTime={handleBreakTime}></Break>
      <ExerciseDetails times={times} breakTimes={breakTimes} ></ExerciseDetails>
      <button className='activity-btn  w-full p-3 text-2xl font-bold mt-7 rounded-xl'>Activity Completed</button>
      </div>
    </div>
  );
};

export default Calculation;