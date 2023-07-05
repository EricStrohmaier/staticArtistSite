

import backroundIMG from "../assets/img/background.jpg";


function BackgroundImg() {
  return <div>
      <img
          className='z-0'
          src={backroundIMG}
          alt="background"
          style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
        />
  </div>
}

export default BackgroundImg