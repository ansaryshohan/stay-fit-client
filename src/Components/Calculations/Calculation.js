
import React from 'react';
import Break from '../Add-a-Break/Break';
import ExerciseDetails from '../Exercise-details/ExerciseDetails';
import ProfileDetails from '../Profile-Details/ProfileDetails';
import './Calculation.css';

const Calculation = () => {
  return (
    <div >
      <ProfileDetails></ProfileDetails>
      <Break></Break>
      <ExerciseDetails></ExerciseDetails>
    </div>
  );
};

export default Calculation;