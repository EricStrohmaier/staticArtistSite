import React from 'react';
import profileImg from '../assets/img/contactbackground.jpg';

export default function MainCard() {
  return (
    <main className="h-fit w-full  flex justify-center items-center ">
      <div className="relative z-0 flex flex-col md:flex-row">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div> */}

        <div className="">
          <img
           src={profileImg}
           alt="Artist"
             />
        </div>
        <div className="z-20 absolute flex justify-center items-center ">
        <div className='flex flex-col justify-center items-center text-white'>
          <div className='mt-4  m-2 text-2xl lg:text-6xl font-bold'>CONTACT</div>
            <div className='text-xl mb-4'><a href="mailto:steturina@gmail.com">steturina@gmail.com</a></div>
        </div>
        </div>
      </div>
    </main>
  );
}
