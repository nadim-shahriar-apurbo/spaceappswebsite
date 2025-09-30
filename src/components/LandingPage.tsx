import React, { useState, useEffect } from 'react';
import { ChevronRight, Heart, Sparkles, X } from 'lucide-react';

interface LandingPageProps {
  onNext: () => void;
  onSkipToElements: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNext, onSkipToElements }) => {
  const [currentText, setCurrentText] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  const storyTexts = [
    "My father was a fisherman. One day, he went fishing in the deep ocean.",
    "But something strange happened—he never came back. His GPS stopped working, and he lost his path in the vast sea.",
    "For years, I wondered why this happened. Later, I discovered the truth: it was caused by solar weather.",
    "A powerful space storm disrupted his navigation system.",
    "I realized many lives—fishermen, farmers, pilots, even power operators—can be affected by space weather.",
    "I decided to create this website to help people understand and prepare."
  ];

  useEffect(() => {
    // Show modal after a short delay
    const modalTimer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    const timer = setTimeout(() => {
      if (currentText < storyTexts.length - 1) {
        setCurrentText(currentText + 1);
      } else {
        setShowButton(true);
      }
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(modalTimer);
    };
  }, [currentText, storyTexts.length]);

  const handleModalResponse = (knowsSolarWeather: boolean) => {
    if (knowsSolarWeather) {
      setModalMessage("Wow! Let's know more");
    } else {
      setModalMessage("Okay, no problem! Let's learn about solar weather");
    }

    setIsRedirecting(true);
    
    setTimeout(() => {
      setShowModal(false);
      onSkipToElements();
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Character Section */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            
            {/* Anime Character */}
            <div className="relative anime-character animate-float">
              <div className="w-80 h-80 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full relative overflow-hidden">
                {/* Face */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                  {/* Hair */}
                  <div className="w-32 h-20 bg-gradient-to-b from-amber-800 to-amber-700 rounded-t-full mb-2"></div>
                  
                  {/* Head */}
                  <div className="w-28 h-32 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full relative">
                    {/* Eyes */}
                    <div className="absolute top-8 left-4 w-6 h-8 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full">
                      <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
                    </div>
                    <div className="absolute top-8 right-4 w-6 h-8 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full">
                      <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
                    </div>
                    
                    {/* Nose */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full"></div>
                    
                    {/* Mouth */}
                    <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 transition-all duration-1000 ${
                      currentText >= 4 ? 'border-green-600 rounded-b-full' : 'border-gray-600'
                    }`}></div>
                  </div>
                </div>
                
                {/* Body */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-gradient-to-b from-blue-500 to-blue-600 rounded-t-lg">
                  {/* Arms */}
                  <div className="absolute -left-6 top-4 w-6 h-16 bg-orange-200 rounded-full"></div>
                  <div className="absolute -right-6 top-4 w-6 h-16 bg-orange-200 rounded-full"></div>
                  
                  {/* Notebook */}
                  <div className="absolute -right-8 top-8 w-4 h-6 bg-yellow-300 border border-yellow-600 rounded-sm transform rotate-12">
                    <div className="w-full h-1 bg-yellow-600 mt-1"></div>
                    <div className="w-full h-1 bg-yellow-600 mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold gradient-text animate-fade-in">
              Stellar Story
            </h1>
            <p className="text-xl text-blue-200 animate-fade-in">
              A Child's Journey to Discover Space Weather
            </p>
          </div>

          {/* Story Text */}
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 min-h-[200px] flex items-center">
            <p className="text-lg lg:text-xl text-white leading-relaxed animate-slide-up text-shadow">
              {storyTexts[currentText]}
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex space-x-2 justify-center lg:justify-start">
            {storyTexts.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index <= currentText ? 'bg-stellar-gold w-8' : 'bg-gray-600 w-2'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          {showButton && (
            <div className="animate-fade-in">
              <button
                onClick={onNext}
                className="group bg-gradient-to-r from-stellar-gold to-orange-500 hover:from-orange-500 hover:to-stellar-gold text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-glow flex items-center space-x-2 mx-auto lg:mx-0"
              >
                <Heart className="w-5 h-5" />
                <span>Learn About Space Weather Elements</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fade-in">
          <div className="bg-black bg-opacity-90 backdrop-blur-sm rounded-2xl max-w-md w-full animate-slide-up border border-stellar-gold border-opacity-30">
            <div className="p-8 text-center">
              {!isRedirecting ? (
                <>
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-stellar-gold to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Quick Question!
                    </h3>
                    <p className="text-lg text-blue-200">
                      Do you know about solar weather?
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleModalResponse(true)}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleModalResponse(false)}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      No
                    </button>
                  </div>
                </>
              ) : (
                <div className="animate-fade-in">
                  <div className="w-16 h-16 bg-gradient-to-r from-stellar-gold to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Sparkles className="w-8 h-8 text-black" />
                  </div>
                  <p className="text-xl text-stellar-gold font-bold mb-4">
                    {modalMessage}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-blue-200">
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-stellar-gold"></div>
                    <span>Redirecting...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;