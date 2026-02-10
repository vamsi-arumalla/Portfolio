import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VantaBackground from './components/VantaBackground'
import Vision from './components/Vision'
import TechStack from './components/TechStack'
import Comparison from './components/Comparison'
import Contact from './components/Contact'
import Footer from './components/Footer'

import FloatingSocials from './components/FloatingSocials'

import { PortfolioProvider } from './context/PortfolioContext'

function App() {
    return (
        <PortfolioProvider>
            <div className="bg-black text-white min-h-screen">
                <Navbar />
                <Hero />
                <Vision />
                <TechStack />
                <Comparison />
                <Contact />
                <Footer />
                <FloatingSocials />
            </div>
        </PortfolioProvider>
    )
}

export default App
