import React from 'react';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProfileDetails.css'

const ProfileDetails = () => {
  return (
    <div>
       {/* section of profile image */}
       <div className="profile flex items-center gap-5">
        <div className="image">
          <img src="profile image.png" alt='' className='w-16 rounded-full' />
        </div>
        <div className="description">
          <h1 className='text-xl font-medium'>Zohir Raihan</h1>
          <h1>
            <FontAwesomeIcon icon={faLocationDot}/>
            <small className='ml-2 text-sm font-normal'>New York,USA</small>
          </h1>
        </div>
      </div>
      {/* section of profile details */}
      <div className='profile-detail flex justify-around mt-6'>
        <div className="weight">
          <h1><span className='text-xl font-medium'>80</span> <span>kg</span></h1>
          <h3>Weight</h3>
        </div>
        <div className="height">
        <h1><span className='text-xl font-medium'>5.11</span> <span>ft</span></h1>
          <h3>Height</h3>
        </div>
        <div className="age">
        <h1><span className='text-xl font-medium'>30</span> <span>yrs</span></h1>
          <h3>Age</h3>
        </div>
      </div>

    </div>
  );
};

export default ProfileDetails;