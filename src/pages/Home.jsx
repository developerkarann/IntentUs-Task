import React from 'react'
import PartnersSection from '../components/PartnersSections';
import ProjectsSections from '../components/ProjectSections';
import ServicesSection from '../components/ServicesSections';
import ConnectSection from '../components/ConnectSections';
import ConnectCircle from '../components/ConnectCircle';

const Home = () => {
    return (
        <>      {/* HERO SECTION */}
            <section className="flex flex-col items-center justify-center mt-12">
                {/* Outer Card */}
                <div className="relative w-[90%] lg:w-[90%] bg-[#0a0a0a] rounded-3xl h-[600px] shadow-[0_0_40px_rgba(255,255,255,0.08)] p-10 border border-white/10 overflow-hidden flex items-center justify-center">

                    {/* 🎥 Background Video Layer */}
                    <video
                        src="/fifa.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-70"
                    ></video>

                    {/* Dark Gradient Overlay for Better Text Visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

                    {/* Centered Text Content */}
                    <div className="relative z-10 text-center flex flex-col items-center justify-center">

                        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-xl">
                            <span className="bg-gradient-to-r from-[#4dd6ff] to-[#a992ff] bg-clip-text text-transparent">
                                Where Events Evolve
                            </span>
                        </h1>

                        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-xl mt-2">
                            <span className="bg-gradient-to-r from-[#ffb16e] via-[#ff7d42] to-[#61e8ff] bg-clip-text text-transparent">
                                Into Experiences.
                            </span>
                        </h1>

                        {/* <button className="mt-10 px-8 py-3 cursor-pointer border border-white/20 bg-white rounded-full text-black text-lg font-semibold hover:bg-black hover:text-white hover:shadow-[0_0_20px_#ffffff50] transition-all duration-300">
                            DesignAR is now Intent
                        </button> */}
                    </div>

                </div>
            </section>


            <PartnersSection />
            <ProjectsSections />
            <ServicesSection />
            <ConnectSection />
            <ConnectCircle />
        </>
    )
}

export default Home;