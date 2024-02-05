import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import logo from '../../assets/logo.png';
import Button from '../Button';

const HeroPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioUrl = '../../assets/MS$GREEN.mp3';

  const strings = ['Ms $Green', 'Green M&M', '$Green Token', 'Green M&M'];

  const togglePlay = () => {
    const audio = new Audio(audioUrl);
    if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='bg-white-800 text-green-900 mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 py-14'>
      {/* Your text goes here */}
      <div className='col-span-1 md:ml-20'>
        {/* Your type effect goes here */}
        <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl  mx-6 md:ml-0'>
          <br />
          <Typewriter
            words={strings}
            loop
            cursor
            cursorStyle='_'
            typeSpeed={150}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </h1>
        <p className='text-lg md:text-xl lg:text-2xl mx-6 md:ml-0'>
          <br />Discover meme delight with Ms $Green
          <br></br>
          a playful token, a tasty potential.Sweeten your <br /> portfolio today! 🍬🪙🚀
        </p>

        {/* Your btn goes here */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:ml-0'>
          <Button className='bg-green-900 md:mr-2 active'>BUY TOKEN</Button>
          
          <Button><a href="https://drive.google.com/file/d/1SzU5-Ut2p3WF4Oiur8G1O3KHDssKrgpW/view">WHITE PAPER</a></Button>

          {/* Add music to the last button */}
          <Button onClick={togglePlay}>{isPlaying ? 'PAUSE MUSIC' : 'PLAY MUSIC'}</Button>
        </div>
      </div>

      <div className='md:col-span-1 mx-6 md:ml-0'>
        {/* Your image goes here */}
        <img src={logo} className='w-max md:w-auto max-h-3/4  md:h-3/4 md:py-6 object-contain' />
      </div>
    </div>
  );
};

export default HeroPage;
