
import React from 'react';
import Break from '../Add-a-Break/Break';
import ExerciseDetails from '../Exercise-details/ExerciseDetails';
import ProfileDetails from '../Profile-Details/ProfileDetails';
import './Calculation.css';

const Calculation = () => {
  return (
    <div className='sticky top-0'>
      <div className='flex flex-col gap-5 p-5 sticky top-0'>
      <ProfileDetails></ProfileDetails>
      <Break></Break>
      <ExerciseDetails></ExerciseDetails>
      <button className='activity-btn  w-full p-3 text-2xl font-bold mt-7 rounded-xl'>Activity Completed</button>
      </div>
    </div>
  );
};

export default Calculation;