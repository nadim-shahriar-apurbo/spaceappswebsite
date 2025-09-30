import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface NewLandingPageProps {
  onExplore: () => void;
}

const NewLandingPage: React.FC<NewLandingPageProps> = ({ onExplore }) => {

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-7xl lg:text-8xl font-bold gradient-text mb-8 animate-float">
            Stellar Story
          </h1>
          <p className="text-2xl lg:text-3xl text-blue-200 mb-4 text-shadow">
            A Child's Journey to Discover Space Weather
          </p>
          <p className="text-lg text-blue-300 max-w-2xl mx-auto leading-relaxed">
            Embark on an educational adventure to understand the invisible forces 
            that connect our planet to the cosmos
          </p>
        </div>

        {/* Explore Button */}
        <div className="animate-slide-up">
          <button
            onClick={onExplore}
            className="group bg-gradient-to-r from-stellar-gold to-orange-500 hover:from-orange-500 hover:to-stellar-gold text-black font-bold py-6 px-12 rounded-full text-2xl transition-all duration-300 transform hover:scale-110 animate-glow flex items-center space-x-4 mx-auto shadow-2xl"
          >
            <Sparkles className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            <span>Explore</span>
            <Sparkles className="w-8 h-8 group-hover:-rotate-12 transition-transform" />
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-stellar-gold rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-nebula-pink rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-blue-400 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-purple-400 rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
};

export default NewLandingPage;