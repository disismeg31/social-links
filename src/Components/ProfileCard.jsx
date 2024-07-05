import React from 'react';
import proPic from '../assets/images/avatar-jessica.jpeg';
import SocialLinks from './SocialLinks.jsx';
 

function ProfileCard() {


  return (
     <div className="card-container flex flex-col flex-wrap rounded-[10px] bg-[#1F1F1F] w-[440px]   p-10">
        <div className="section1">
          <div className="img flex justify-center  ">
          <img className='w-[110px] h-[110px] rounded-full' src={proPic} alt="profile-img"/>
          </div>
          <div className="intro mt-9">
            <h1 className="text-3xl font-semibold text-[#ffffff] ">
              Jessica Randall
            </h1>
            <p className='text-[17px] font-semibold text-[#c5f82a] mt-3'>London, United Kingdom</p>
            <p className='font-medium text-[#ffffff] mt-6 mb-4'>&quot;Front-end developer and avid reader.&quot;</p>
          </div>
          <SocialLinks/>
        </div>

     </div>
  )
}

export default ProfileCard