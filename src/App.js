import AlbumPicture from "./components/AlbumPicture";
import BackgroundImg from "./components/BackgroundImg";
import Button from "./components/Button";
import EmailSignup from "./components/EmailSignup";
import FooterCard from "./components/FooterCard";
import Headline from "./components/Headline";
import MainCard from "./components/MainCard";
import useMediaQuery from "./hooks/useMediaQuery";


function App() {
  const isDesktop = useMediaQuery("(min-width: 1022px)");

  return (
    <div className="flex min-h-screen flex-col items-center justify-between font-sans font-normal">
    <header className="relative w-full h-fit">
         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
    <BackgroundImg/>
      <div className='w-full h-screen mb-5 p-8 flex flex-col items-center justify-center'>
      <Headline/>
       
    
    {isDesktop ? (
        <div className="relative z-20 w-4/5 h-4/5 flex flex-col items-center justify-center">       
      <div className="mt-10 flex items-top justify-center w-full  ">
        <AlbumPicture/>
          <div className='flex flex-col '> 
            <Button/>
            <EmailSignup/>
            <div className="my-5 lg:mx-10 rounded-md">
              <iframe title="artist" src="https://open.spotify.com/embed/artist/1Nb4vxRmJZpwJXuHs5ZQO3?utm_source=generator&theme=0" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>                  
            </div>
        </div>
    </div>
    </div>
    ) : ( 
      <div className="mt-8  flex flex-col z-40 ">
        <AlbumPicture/>
        <Button/>
        <EmailSignup/> 
          <div className="my-5 rounded-md">
              <iframe title="artist" src="https://open.spotify.com/embed/artist/1Nb4vxRmJZpwJXuHs5ZQO3?utm_source=generator&theme=0" width="100%" height="152"  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>                  
            </div>                 
      </div>
    )}
  
         </div>
         <div className="z-50 relative flex justify-center items-center my-10 mx-4 ">
         <iframe width="660" height="360" src="https://www.youtube.com/embed/oz2D9lD0Cc8?start=667" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      </div>
    </header>
    
      <MainCard/>
        <FooterCard/>
  </div>
  );
}

export default App;
