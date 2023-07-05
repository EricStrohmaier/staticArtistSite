import React from 'react';
import profileImg from '../assets/img/profile.JPG';

export default function MainCard() {
  return (
    <main className="h-fit w-full  flex justify-center items-center">
      <div className="m-0 my-10 border-2 border-white w-4/5 flex flex-col md:flex-row">
        <div className="lg:w-1/2 w-full">
          <img src={profileImg} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/2 w-full">
          <div className='mt-4  m-2 text-2xl lg:text-6xl font-bold'>CONTACT</div>
            <div className='text-xl mb-4 '><a href="mailto:steturina@gmail.com">steturina@gmail.com</a>

</div>


        </div>
      </div>
    </main>
  );
}
