
import albumCover from "../assets/img/albumcover.jpg"



function AlbumPicture() {
  return (
    <div className="group  relative flex justify-center items-center m-0 overflow-hidden border-2 border-opacity-75 border-zinc-400  ">
    <img
      className="  "                
      width={450}
      height={450}
      src={albumCover} 
      alt="Album-cover"
    />

    {/* hover effect on the IMG */}
  <div className="transition duration-100 absolute bottom-0 left-0 w-full h-1/5 bg-pink-300 opacity-0 group-hover:opacity-90 "></div>
  <div className="  absolute lg:bottom-8 sm:bottom-4 bottom-3 hidden  group-hover:flex font-semibold text-lg md:text-2xl lg:text-4xl text-white  pointer-events-none  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
  <p>NEW SINGLE<span className="font-bold text-lg md:text-2xl  lg:text-4xl text-pink-600 ">{" "} OUT NOW</span>{" "} !</p></div>
  </div>
  )
}

export default AlbumPicture