
import albumCover from "../assets/img/nomadicechoes.jpg"



function AlbumPicture() {
  return (
    <div className="group transition duration-500 relative flex justify-center items-center m-0 overflow-hidden border-2 border-opacity-75 border-zinc-400  ">
    <img
      className="  "                
      width={450}
      height={450}
      src={albumCover} 
      alt="Album-cover"
    />

    {/* hover effect on the IMG */}
  <div className="absolute bottom-0 left-0 w-full h-1/6 bg-pink-300 opacity-0 group-hover:opacity-90 "></div>
  <div className="absolute lg:bottom-6 bottom-4 font-normal hidden  group-hover:flex  text-md md:text-2xl  text-white  pointer-events-none  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
  <p>NEW SINGLE<span className="text-md md:text-2xl text-pink-600 ">{" "}OUT NOW</span></p></div>
  </div>
  )
}

export default AlbumPicture