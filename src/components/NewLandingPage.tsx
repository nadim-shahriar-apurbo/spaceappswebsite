import React, { useState, useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';

interface NewLandingPageProps {
  onExplore: () => void;
  onSkipToElements: () => void;
}

const NewLandingPage: React.FC<NewLandingPageProps> = ({ onExplore, onSkipToElements }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // Show modal after a short delay
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

export default NewLandingPage;