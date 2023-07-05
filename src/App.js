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
    <div className="flex min-h-screen flex-col items-center justify-between">
    <header className="relative w-full h-fit">
         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
    <BackgroundImg/>
      <div className='w-full h-full  p-10 flex items-center justify-center'>
        <div className="relative z-20 w-4/5 h-4/5 flex flex-col items-center justify-center">
        <Headline/>
          
    
    {isDesktop ? (
      <div className="mt-10 m-2 flex items-top justify-center w-full  ">
        <AlbumPicture/>
          <div className='flex flex-col items-top '> 
            <Button/>
            <EmailSignup/>                  
        </div>
    </div>
    ) : ( 
      <div className="mt-10 m-2 flex flex-col  ">
        <AlbumPicture/>
        <Button/>
        <EmailSignup/>                  
      </div>
    )}
        </div>
      </div>
    </header>

<MainCard/>
<FooterCard/>
  </div>
  );
}

export default App;
