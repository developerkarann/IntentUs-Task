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
                <div className="w-[90%] lg:w-[90%] bg-[#0a0a0a] rounded-3xl h-[600px]  shadow-[0_0_40px_rgba(255,255,255,0.08)]  p-10 border border-white/10  relative overflow-hidden">

                    {/* 🎥 Background Video */}
                    <video
                        src="https://framerusercontent.com/assets/A8rjOGJUJUnrnkjXZtMPe71AYo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-90"
                    ></video>

                    {/* Text Content */}
                    <div className="relative z-10 text-center py-24">

                        <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-[#66d1ff] to-[#8f7aff] bg-clip-text text-transparent">
                                shaping your
                            </span>
                        </h1>

                        <h1 className="text-6xl lg:text-8xl font-bold mt-2 leading-tight">
                            <span className="bg-gradient-to-r from-[#ff9852] via-[#ff8a47] to-[#63d8f9] bg-clip-text text-transparent">
                                intentions
                            </span>
                        </h1>

                        <button className="mt-10 w-50 hover:w-60 py-2  cursor-pointer border border-amber-900 bg-white rounded-full text-black hover:bg-black hover:text-white  transition duration-300 font-bold">
                            DesignAR is now Intent
                        </button>

                    </div>

                </div>

            </section>


            <PartnersSection />
            <ProjectsSections />
            <ServicesSection />
            <ConnectSection />
            <ConnectCircle/>
        </>
    )
}

export default Home;