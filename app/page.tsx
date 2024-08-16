'use client';

import Image from "next/image";
import logo from '../public/logo_black.png'
import backgroundImage from '../public/img_quesadilla_1.webp'
import { useEffect, useState } from "react";
import SubscribeDialog from "./public/components/SubscribeDialog";

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
      {/* <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}>

      </div> */}

      <div className="fixed top-2 left-0 right-0 flex justify-center p-4">
        <Image
          src={logo}
          alt="Brand Logo"
          width={250}
          height={150}
          className="w-24 h-auto sm:w-60 sm:h-auto" // Adjusts size for different screen sizes
        />
      </div>

      <SubscribeDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </div>
  );
}

