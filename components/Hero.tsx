'use client';
/**
 * Hero Component
 * The main landing section featuring the portrait photo and punchy intro.
 * Drop your photo at /public/me.jpg (or .png) — the frame is ready.
 */
import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-12 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
                <div className="inline-block border-4 border-black bg-neon-yellow px-4 py-1 text-xs md:text-sm font-bold uppercase rotate-[-2deg]">
                    Just another Anime nerd
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[1.1] md:leading-none tracking-tighter">
                    Entropy, <br />
                    <span className="text-white inline-block px-2 relative z-10 before:content-[''] before:absolute before:-inset-2 before:-z-10 before:bg-neon-pink before:skew-x-[-10deg] before:border-4 before:border-black before:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        Briefly
                    </span> <br />
                    Tamed.
                </h1>
                <p className="text-lg md:text-2xl font-semibold max-w-lg mt-6 mx-auto md:mx-0">
                    The interesting stuff is always one layer deeper.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                    <a href="#CONSTRUCTS" className="brutal-btn brutal-btn-pink">View Projects</a>
                    <a href="https://github.com/mwarrc" target="_blank" rel="noreferrer" className="brutal-btn bg-white">GitHub ↗</a>
                </div>
            </div>

            {/* ── Portrait frame ── */}
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm relative px-4 md:px-0">
                {/* Brutalist photo frame */}
                <div
                    className="relative w-full aspect-square border-8 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden group bg-neon-blue select-none"
                    onContextMenu={(e) => e.preventDefault()}
                >

                    {/* Base layer — portrait, always visible */}
                    <Image
                        src="/me.png"
                        alt="Mwariri Clinton"
                        fill
                        sizes="(max-width: 768px) 90vw, 400px"
                        className="object-cover object-top grayscale origin-top"
                        draggable={false}
                        priority
                    />

                    {/* "Tuff" text on hover */}
                    <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black text-white font-black uppercase tracking-tighter px-4 py-2 text-lg border-4 border-neon-yellow shadow-[4px_4px_0px_0px_rgba(255,42,133,1)]">
                            Tuff
                        </div>
                    </div>

                    {/* Transparent shield — blocks right-click save & drag */}
                    <div className="absolute inset-0 z-20" onContextMenu={(e) => e.preventDefault()} />

                    {/* Shape overlays — sit on top, mix-blend so photo shows through gaps */}
                    <div className="absolute top-1/4 left-[-10%] w-[120%] h-1/2 bg-neon-pink -rotate-12 border-y-8 border-black opacity-75 transition-transform group-hover:rotate-0 group-hover:scale-110 duration-500 delay-100 mix-blend-multiply" />
                    <div className="absolute top-[10%] left-[60%] w-12 h-12 md:w-16 md:h-16 rounded-full bg-neon-yellow border-4 border-black transition-transform group-hover:-translate-y-4 duration-500 delay-200 mix-blend-multiply" />
                    <div className="absolute bottom-[-3rem] left-[-3rem] w-24 h-24 md:w-32 md:h-32 bg-neon-blue border-8 border-black rotate-45 transition-transform group-hover:rotate-90 duration-500 delay-300 mix-blend-multiply opacity-80" />
                </div>

                {/* Name badge beneath the frame */}
                <div className="mt-[-1rem] relative z-10 bg-black text-white font-black uppercase tracking-tighter px-6 py-2 text-lg border-4 border-neon-yellow shadow-[4px_4px_0px_0px_rgba(255,42,133,1)]">
                    Mwariri Clinton
                </div>
            </div>
        </section>
    );
}
