'use client';

import Image from "next/image";
import logo from '../public/logo_single_line.png'
import backgroundImage from '../public/background_salad.jpg'
import { useEffect, useState } from "react";
import SubscribeDialog from "./public/components/SubscribeDialog";
import Navigation from "./public/components/Navigation";
import SubscribeBox from "./public/components/SubscribeBox";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    // Show dialog 1 second after component mounts
    const timer = setTimeout(() => {
      setIsDialogOpen(true);
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}>

        <Navigation />

        <div className="flex flex-col flex-grow">
          <div className="absolute mt-5 left-10 bottom-1/4 text-black text-left">
            <div className="font-regular  text-[30px] leading-tight">The</div>
            <div className="font-bold text-[60px] text-primaryGreen leading-none">PROTEIN</div>
            <div className="font-bold text-[60px] text-primaryGreen leading-none">GENIE</div>
          </div>

          <div className="absolute left-10 bottom-20">
            <SubscribeBox />
          </div>
        </div>

      </div>

      {/* <SubscribeDialog isOpen={isDialogOpen} onClose={handleCloseDialog} /> */}
    </div>
  );
}

