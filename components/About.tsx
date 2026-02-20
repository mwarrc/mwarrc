/**
 * About Component - PocketScore Spotlight
 * Focused showcase for the primary repository using LIVE project data.
 */
import React from 'react';

export default function About() {
    const capabilities = [
        "Tactile Haptic Keyboard",
        "Adaptive Grid/List Layouts",
        "Pool Probability Insights",
        "Offline-First Architecture",
        "Match Fee Calculator",
        "Material You Dynamic Color"
    ];

    const techStack = [
        { label: "LANGUAGE", value: "KOTLIN", color: "text-neon-pink" },
        { label: "UI_FRAMEWORK", value: "JETPACK COMPOSE", color: "text-neon-blue" },
        { label: "ARCHITECTURE", value: "MVVM / CLEAN", color: "text-white" },
        { label: "PERSISTENCE", value: "DATASTORE / SERIALIZATION", color: "text-neon-yellow" },
    ];

    return (
        <section id="about" className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24 border-t-4 border-black">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Side: Real Repo Intel */}
                <div className="space-y-8 md:space-y-10">
                    <div className="inline-block bg-neon-pink text-white px-4 py-2 font-black uppercase tracking-tighter border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm">
                        PROJECT Project
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.8]">
                            Pocket<br />
                            <span className="text-neon-pink">Score</span>
                        </h2>
                        <p className="text-lg md:text-2xl font-bold leading-tight max-w-md border-l-8 border-neon-blue pl-6 py-2">
                            The most expressive scorekeeping app for Android.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {capabilities.map((cap) => (
                            <div key={cap} className="flex items-center gap-2 font-mono text-[10px] md:text-xs font-bold uppercase group">
                                <span className="w-2 h-2 bg-black group-hover:bg-neon-pink transition-colors shrink-0"></span>
                                {cap}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Technical Specs Card (Material Brutalism) */}
                <div className="group relative mt-10 lg:mt-0">
                    {/* Floating Label */}
                    <div className="absolute -top-6 right-0 md:-right-4 bg-neon-yellow text-black px-4 py-2 font-black text-xs md:text-sm uppercase border-4 border-black z-20 transition-transform group-hover:rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        BUILD: Expressive
                    </div>

                    <div className="brutal-card bg-neon-blue text-black p-6 md:p-10 font-mono relative overflow-hidden transition-all group-hover:translate-x-1 group-hover:translate-y-1">
                        {/* Solid pattern instead of gradient */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-black"></div>

                        <div className="space-y-6 md:space-y-8 relative z-10">
                            <div className="space-y-4">
                                <div className="bg-black text-white inline-block px-3 py-1 font-black text-[10px] md:text-sm uppercase tracking-widest">
                                    Technical_Specs
                                </div>
                                <div className="space-y-3">
                                    {techStack.map((tech) => (
                                        <div key={tech.label} className="flex justify-between items-center border-b-2 border-black/20 pb-2">
                                            <span className="text-[9px] md:text-[10px] text-black font-black uppercase opacity-60">{tech.label}</span>
                                            <span className="text-xs md:text-sm font-black text-black tracking-tighter uppercase text-right">
                                                {tech.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 md:pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a href="https://github.com/mwarrc/PocketScore" target="_blank" rel="noreferrer" className="brutal-btn bg-black text-white text-center py-3 text-xs md:text-sm font-black hover:bg-neon-pink transition-colors">
                                    GITHUB_REPO
                                </a>
                                <a href="https://mwarrc.github.io/pscore/" target="_blank" rel="noreferrer" className="brutal-btn bg-white text-black text-center py-3 text-xs md:text-sm font-black hover:bg-neon-pink hover:text-white transition-colors">
                                    MORE
                                </a>
                            </div>
                        </div>

                        {/* Decoration */}
                        <div className="mt-8 md:mt-12 opacity-100 text-[10px] uppercase tracking-widest font-black leading-tight border-l-4 border-black pl-4">
                            SECURITY: OFFLINE_FIRST <br />
                            ENCRYPTION: LOCAL_ONLY <br />
                            LICENSE: AGPL-3.0
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
