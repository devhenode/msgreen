import React from 'react';
import Button from '../Button';
import ThirdPage from '../Hero_3/ThirdPage';
import FourthPage from '../Hero_4/FourthPage';

const SecondPage = () => {
  return (
    <div className="flex flex-col md:flex-row mb-5 relative">
      {/* Left Column */}
      <div className="md:flex-1">
        {/* Add your text here */}
        <p className="p-4 md:p-11 font-extrabold text-4xl md:text-[40px] mt-12">
          The Sweetest Ride in <br /> Crypto
        </p>
      </div>

      {/* Green Line (Hidden on Mobile, Margin on Desktop) */}
      <div className="hidden md:flex items-center justify-center h-[360px] w-1 bg-green-500 mr-8"></div>

      {/* Right Column */}
      <div className="md:flex-1">
        {/* Add your text here */}
        <p className="p-4 md:pb-8">
          Get ready to be swept off your feet in the world of Candy Lovers, <br />where exhilarating times are knocking at our door, and we can <br /> hardly contain our excitement as we share the latest scoop with <br /> you! We're all about showering tribute upon the dazzling Ms.<br />
          Green while crafting a dynamic community that's buzzing with <br /> energy.
        </p>

        <p className="p-4">
          2023 has been a whirlwind adventure – we've taken centre stage <br /> in headlines, and now we're gearing up to crank things up a <br /> notch. Brace yourself, because Ms $Green narrative has woven <br /> its magic, infusing our community with an electric spirit that's <br /> brought together a lively crew of devoted enthusiasts.
        </p>

        <Button>
          WAITLIST
        </Button>
      </div>

      {/* Third Page */}
      <div className="absolute bottom-0 left-0 w-full">
        <ThirdPage />
      </div>
    </div>
  );
};

export default SecondPage;
