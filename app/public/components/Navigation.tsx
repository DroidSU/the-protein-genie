import Link from "next/link";
import { useState } from 'react';

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex justify-start items-center p-4 bg-white-800">
            {/* <div className="text-white text-lg font-montserrat-bold">
                Brand
            </div> */}

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-10">
                <Link href="/" className="font-bold text-black hover:font-bold">
                    Home
                </Link>
                <Link href="/" className="font-regular text-black hover:font-bold hover:bold">
                    Product
                </Link>
                <Link href="/" className="font-regular text-black hover:font-bold hover:bold">
                    About
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden text-black text-2xl leading-none">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="focus:outline-none"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col space-y-2 absolute top-16 left-5 w-full bg-black-800 p-4">
                    <Link href="/" className="font-bold text-primaryGreen hover:font-black">
                        Home
                    </Link>
                    <Link href="/" className="font-regular text-black hover:font-bold hover:text-primaryGreen">
                        Product
                    </Link>
                    <Link href="/" className="font-regular text-black hover:font-bold hover:text-primaryGreen">
                        About
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
