import Link from "next/link";
import { useState } from 'react';

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex mt-4 ml-5 justify-start items-center p-4 bg-white-800">
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
            <div className="md:hidden text-white">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="focus:outline-none"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col space-y-2 absolute top-16 left-0 w-full bg-gray-800 p-4">
                    <Link href="/" className="font-montserrat-bold text-white hover:font-montserrat-italic">
                        Home
                    </Link>
                    <Link href="/product" className="font-montserrat text-white hover:font-montserrat-bold hover:italic">
                        Product
                    </Link>
                    <Link href="/about" className="font-montserrat-italic text-white hover:font-montserrat-bold hover:not-italic">
                        About
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
