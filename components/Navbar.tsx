'use client';
/**
 * Navbar Component
 * Navigation header styling with brutalist borders and clean spacing
 * Updated with mobile drawer for responsive optimization.
 */
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="w-full border-b-4 border-black bg-white py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-[100]">
            <Link href="/" className="text-2xl font-bold tracking-tighter uppercase relative group z-[110]">
                mwarrc
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-neon-pink transition-all group-hover:w-full"></span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 items-center">
                <Link href="#CONSTRUCTS" className="font-bold hover:text-neon-pink transition-colors">CONSTRUCTS</Link>
                <Link href="#about" className="font-bold hover:text-neon-blue transition-colors">ABOUT</Link>
                <a href="https://ko-fi.com/mwarrc" target="_blank" rel="noreferrer" className="brutal-btn brutal-btn-yellow text-sm py-2 px-4 shadow-none hover:shadow-none hover:-translate-y-1">
                    BUY ME A COFFEE
                </a>
                <Link href="#contact" className="brutal-btn brutal-btn-pink text-sm py-2 px-4 shadow-none hover:shadow-none hover:-translate-y-1">
                    CONNECT
                </Link>
            </div>

            {/* Mobile Toggle */}
            <button
                onClick={toggleMenu}
                className="md:hidden z-[110] p-2 border-4 border-black bg-neon-yellow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                aria-label="Toggle Menu"
            >
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square">
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                )}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <Link href="#CONSTRUCTS" onClick={toggleMenu} className="text-5xl font-black uppercase hover:text-neon-pink transition-colors tracking-tighter">CONSTRUCTS</Link>
                <Link href="#about" onClick={toggleMenu} className="text-5xl font-black uppercase hover:text-neon-blue transition-colors tracking-tighter">ABOUT</Link>
                <Link href="#contact" onClick={toggleMenu} className="text-5xl font-black uppercase hover:text-neon-yellow transition-colors tracking-tighter">CONNECT</Link>

                <div className="absolute bottom-10 flex gap-6">
                    <a href="https://github.com/mwarrc" target="_blank" rel="noreferrer" className="font-bold border-b-4 border-black">GITHUB</a>
                    <a href="https://x.com/MWARRC" target="_blank" rel="noreferrer" className="font-bold border-b-4 border-black">X_TWITTER</a>
                    <a href="https://ko-fi.com/mwarrc" target="_blank" rel="noreferrer" className="font-bold border-b-4 border-black">BUY ME A COFFEE</a>
                </div>
            </div>
        </nav>
    );
}
