import { useState } from "react";


function EmailSignup (){
    const [email , setEmail] = useState('');
  return (
   
    <div className='mt-4 m-2 flex w-full  items-center justify-center'>
       <div className='rounded-md relative w-full lg:w-4/5 h-fit flex justify-center items-center'>
          <input 
            onChange={(e) => {setEmail(e.target.value)}}
            className='w-full  h-[50px] rounded-md indent-2 md:indent-4 ' 
            type='email' 
            placeholder='your@email.com' />
                      
            <button onClick={()=>{
             console.log(email);
                      
            }} className=' transition duration-100 ml-3 lg:mt-0 lg:ml-3 p-[10px] bg-pink-400 hover:scale-105 rounded-md text-lg md:text-xl font-semibold text-white'>
                Subscribe
                </button> 
        </div>
    </div>
  )
}

export default EmailSignup