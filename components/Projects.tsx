/**
 * Projects Component
 * Displays live project data from mwarrc's portfolio in a brutalist grid.
 */
import React from 'react';

const LIVE_PROJECTS = [
    {
        title: "PocketScore",
        description: "The most expressive scoreboard for Android. Digital scorekeeper built with Jetpack Compose featuring Material 3 and real-time insights.",
        tags: ["Kotlin", "Compose", "Android", "MVVM"],
        link: "https://github.com/mwarrc/PocketScore",
        demo: "https://mwarrc.github.io/pscore/",
        color: "bg-neon-pink"
    },
    {
        title: "ProxySet",
        description: "A tool for managing and testing proxies on linux.",
        tags: ["Management", "NetCONSTRUCTSing", "Tools"],
        link: "https://github.com/mwarrc/proxyset",
        color: "bg-neon-blue"
    },
    {
        title: "Security UI Lib",
        description: "A secure, modular, and professional component library designed with modern materials and brutalism. Focused on zero-dependency UI.",
        tags: ["TypeScript", "Security", "Brutalism"],
        link: "https://github.com/mwarrc",
        color: "bg-neon-yellow"
    }
];

export default function Projects() {
    return (
        <section id="CONSTRUCTS" className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase mb-12 md:mb-16 flex items-center gap-4 md:gap-8 tracking-tighter overflow-hidden">
                <span className="shrink-0 bg-black text-white px-4 md:px-6 py-2 rotate-[-2deg] text-2xl sm:text-4xl md:text-6xl">Live CONSTRUCTS</span>
                <span className="flex-1 h-2 md:h-3 bg-black"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {LIVE_PROJECTS.map((project, idx) => (
                    <div key={idx} className="brutal-card h-full flex flex-col relative overflow-hidden group bg-white">
                        {/* Coming Soon Overlay for Security UI Lib */}
                        {project.title === "Security UI Lib" && (
                            <div className="absolute inset-0 z-30 backdrop-blur-md bg-white/30 flex items-center justify-center p-6 border-4 border-black border-inset">
                                <div className="bg-black text-white px-6 md:px-8 py-3 md:py-4 font-black text-xl md:text-2xl uppercase rotate-[-5deg] shadow-[6px_6px_0px_0px_rgba(255,42,133,1)] border-4 border-white">
                                    Coming Soon
                                </div>
                            </div>
                        )}

                        {/* Status bar */}
                        <div className={`h-10 md:h-12 ${project.color} border-b-4 border-black w-full flex items-center justify-between px-4 font-black font-mono text-[10px] uppercase italic`}>
                            <span>&lt;Project_Module/&gt;</span>
                            <span className="opacity-50">v1.0.0</span>
                        </div>

                        <div className="p-6 md:p-8 flex flex-col flex-1">
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-neon-pink transition-colors">{project.title}</h3>
                            <p className="font-bold text-black/60 text-base md:text-lg leading-snug flex-1 italic">
                                "{project.description}"
                            </p>

                            <div className="flex flex-wrap gap-2 mt-6 md:mt-8 mb-6 md:mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="border-2 border-black px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-black uppercase bg-gray-50 transform hover:scale-105 transition-transform">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col gap-3">
                                <a href={project.link} target="_blank" rel="noreferrer" className="brutal-btn text-center text-xs md:text-sm py-3 bg-black text-white hover:bg-neon-pink hover:text-black transition-all font-black">
                                    SOURCE_CODE
                                </a>
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noreferrer" className="brutal-btn brutal-btn-blue text-center text-xs md:text-sm py-3 font-black transition-all">
                                        MORE
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
