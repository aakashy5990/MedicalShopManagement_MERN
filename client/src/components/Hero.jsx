import React from 'react'
import bg from '../assets/bg.jpeg'
import { useAppContext } from '../context/AppContext';

const Hero = () => {

  const {isScrolled, isMenuOpen} = useAppContext();

  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>

      {/* Dim Overlay */}
      <div className={`absolute inset-0 z-0 bg-gradient-to-b ${isScrolled ? 'from-black/10 via-black/20 to-black/30' : 'from-black/0 via-black/5 to-black/10'}`}></div>
      
      {/* Content */}
      <div className={`relative z-10 flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 ${isScrolled ? 'text-black' : 'text-white' } h-full`}>
        <p className="bg-header-primary/50 px-3.5 py-1 rounded-full mt-20">
          MedicalShopManagementSystem
        </p>
        <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
          Your Trusted Online Medical Shop
        </h1>
        <p className="max-w-130 mt-2 text-sm md:text-base">
          Order genuine medicines, health essentials, and supplies with secure checkout and fast doorstep delivery.
        </p>
      </div>

    </div>
  );
}

export default Hero;
