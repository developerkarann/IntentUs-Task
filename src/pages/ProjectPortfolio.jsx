import React from 'react'
import OverviewSection from '../components/project/OverviewSection'
import ProcessFlipCards from '../components/project/ProccessFlipCard'
import UXResearchTrain from '../components/project/UXResearchTrain'
import ResearchUI from '../components/project/ResearchUI'
import PainPointsUI from '../components/project/PainPointsUI'
import Wireframes from '../components/project/Wireframes'


const ProjectPortfolio = () => {
    return (
        <>
            <div className="bg-black h-20 w-full"></div>

            <img src="https://framerusercontent.com/images/FyU27ocXoMpaYviBZDZji8wX0k.webp?scale-down-to=2048" alt="" />
            <img src="/projectB.PNG" className='w-full' alt="" />

            <div className="intro">
                <video
                    className="w-full h-full object-cover object-center"
                    src="/intro.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>


            <OverviewSection />
            <ProcessFlipCards />
            <img src="https://framerusercontent.com/images/GhVybtguhF3VwznQ9QlFLxNYWzI.webp?scale-down-to=2048" alt="" />
            <img src="https://framerusercontent.com/images/9vDHZ7qkS4JYhzNb83nmxgn1B3A.webp?scale-down-to=2048" alt="" />
            <ResearchUI />


            <img src="https://framerusercontent.com/images/KNMdzDxPk6AhL4miDtmnFeUXCw.webp?scale-down-to=2048" alt="" />
            {/* Pain Points  */}
            <img src="https://framerusercontent.com/images/mGABX3zVQDXRgDkg2BiMQAWEc.webp?scale-down-to=2048" alt="" />

            <Wireframes />

            {/* Section  */}
            <img src="https://framerusercontent.com/images/ttfxgq1B3RY1bGBQyn7j0kzw.webp?scale-down-to=2048" alt="" />

            {/* sections */}
            <img src="https://framerusercontent.com/images/A3s0fmqGCzxATDpefAmsH6v1ng.webp?scale-down-to=2048" alt="" />

            <img src="https://framerusercontent.com/images/Wf6p22dvmRFNlx73xk6vwAmSllU.webp?scale-down-to=2048" alt="" />
            <img src="https://framerusercontent.com/images/ximd00Pls0ciUY1f18v7GnKXmU.webp?scale-down-to=2048" alt="" />
        </>


    )
}

export default ProjectPortfolio