"use client";
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center p-4 sticky top-0" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', zIndex: 1000 }}>
            {/* Desktop View */}
            <div className="hidden md:flex md:items-center md:justify-between w-full">
                <div className="flex items-center space-x-4">
                    <div className="text-xl font-bold">Logo</div>
                    <div className="cursor-pointer">Products</div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="py-2 px-4 bg-blue-500 text-white rounded-md">Sign Up</button>
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex items-center justify-between w-full">
                <div className="flex items-center">
                    <button className="text-xl" onClick={toggleMenu}>
                        {isMenuOpen ? <HiX /> : <HiMenu />}
                    </button>
                    <div className="mx-auto text-xl font-bold">Logo</div>
                </div>

                {/* Drawer Menu */}
                <div 
                    className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
                    onClick={toggleMenu}
                />
                <div 
                    className={`fixed top-0 right-0 w-2/3 h-full shadow-lg transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} 
                    style={{ backgroundColor: 'var(--drawer-background)', color: 'var(--drawer-foreground)', zIndex: 1100 }} // Higher z-index
                >
                    <div className="flex flex-col items-center p-4">
                        <div className="cursor-pointer py-2">Products</div>
                        <div className="cursor-pointer py-2">Sign Up</div>
                    </div>
                </div>
            </div>

            {/* Mobile "Sign Up" button */}
            <div className="flex items-center space-x-4 md:hidden">
                <button className="py-2 px-4 bg-green-500 text-white rounded-md">Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;
