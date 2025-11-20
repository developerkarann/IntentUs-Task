import React from 'react'
import HeroSection from '../components/football/HeroSection'
import OverviewSection from '../components/football/OverviewSection'
import ChallengeBrief from '../components/football/ChallengeBrief'
import ProblemsPainPoints from '../components/football/ProblemsPainPoints'
import StrategySolution from '../components/football/StrategySolution'
import EventHighlights from '../components/football/EventsHighlights'
import GallerySection from '../components/football/GallerySection'
import FinalCTA from '../components/football/FinalCTA'


const FootballEvent = () => {
    return (
        <>
            <div className="bg-black h-18 w-full"></div>
            <HeroSection />
            <OverviewSection />
            <ChallengeBrief/>
            <ProblemsPainPoints/>
            <StrategySolution/>
            <EventHighlights/>
            <GallerySection/>
            <FinalCTA/>
        </>
    )
}

export default FootballEvent