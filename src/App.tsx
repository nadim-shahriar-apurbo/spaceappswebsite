import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import SpaceWeatherElements from './components/SpaceWeatherElements';
import HumanImpact from './components/HumanImpact';
import PredictionPage from './components/PredictionPage';
import StarField from './components/StarField';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const navigateToPage = (page: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
    }, 500);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <LandingPage onNext={() => navigateToPage(2)} />;
      case 2:
        return <SpaceWeatherElements onNext={() => navigateToPage(3)} />;
      case 3:
        return <HumanImpact onNext={() => navigateToPage(4)} />;
      case 4:
        return <PredictionPage onBack={() => navigateToPage(1)} />;
      default:
        return <LandingPage onNext={() => navigateToPage(2)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-blue via-cosmic-purple to-space-blue relative">
      <StarField />
      
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-space-blue bg-opacity-80">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-stellar-gold"></div>
        </div>
      )}
      
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {renderCurrentPage()}
      </div>
      
      {/* Navigation dots */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            onClick={() => navigateToPage(page)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentPage === page
                ? 'bg-stellar-gold scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;