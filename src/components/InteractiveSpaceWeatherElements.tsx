import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Zap, Sun, Waves, Wind, Sparkles } from 'lucide-react';

interface InteractiveSpaceWeatherElementsProps {
  onNext: () => void;
}

interface Element {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string;
  color: string;
  facts: string[];
}

const InteractiveSpaceWeatherElements: React.FC<InteractiveSpaceWeatherElementsProps> = ({ onNext }) => {
  const [currentElementIndex, setCurrentElementIndex] = useState(0);
  const [showFacts, setShowFacts] = useState(false);

  const elements: Element[] = [
    {
      id: 'cme',
      title: 'Coronal Mass Ejections (CME)',
      icon: <Sun className="w-16 h-16" />,
      description: 'Massive bursts of solar wind and magnetic fields released from the Sun\'s corona',
      details: 'Coronal Mass Ejections are like giant bubbles of gas and magnetic field lines that are ejected from the Sun over the course of several hours. When they reach Earth, they can cause beautiful auroras but also disrupt our technology.',
      color: 'from-yellow-400 to-orange-600',
      facts: [
        'CMEs can travel at speeds up to 3,000 km/s',
        'They can contain billions of tons of plasma',
        'The largest CME on record occurred in 1859',
        'They cause the beautiful Northern and Southern Lights'
      ]
    },
    {
      id: 'solar-flares',
      title: 'Solar Flares',
      icon: <Zap className="w-16 h-16" />,
      description: 'Intense bursts of radiation from the Sun\'s surface',
      details: 'Solar flares are like giant explosions on the Sun that release enormous amounts of energy. They happen when magnetic field lines get tangled up and suddenly snap back into place, releasing energy equivalent to billions of nuclear bombs!',
      color: 'from-red-500 to-orange-500',
      facts: [
        'The largest flares are called X-class flares',
        'They can disrupt radio communications on Earth',
        'Flares travel at the speed of light',
        'They often occur near sunspots'
      ]
    },
    {
      id: 'geomagnetic-storms',
      title: 'Geomagnetic Storms',
      icon: <Waves className="w-16 h-16" />,
      description: 'Disturbances in Earth\'s magnetic field caused by solar activity',
      details: 'When solar particles reach Earth, they interact with our planet\'s magnetic field, creating geomagnetic storms. These storms can make compasses spin wildly and cause power outages, but they also create spectacular light shows in the sky!',
      color: 'from-green-400 to-blue-600',
      facts: [
        'They can last from hours to several days',
        'Stronger storms can be seen at lower latitudes',
        'They can affect GPS navigation systems',
        'Animals like birds and whales use magnetic fields to navigate'
      ]
    },
    {
      id: 'solar-wind',
      title: 'Solar Wind',
      icon: <Wind className="w-16 h-16" />,
      description: 'A constant stream of charged particles flowing from the Sun',
      details: 'The solar wind is like an invisible river of particles constantly flowing from the Sun throughout our solar system. It\'s always there, gently pushing on planets, comets, and spacecraft, shaping the space environment around us.',
      color: 'from-blue-400 to-purple-600',
      facts: [
        'It travels at about 400 km/s on average',
        'It creates the shape of comet tails',
        'It helps protect us from cosmic rays',
        'It extends beyond Pluto\'s orbit'
      ]
    }
  ];

  const currentElement = elements[currentElementIndex];

  const handleNext = () => {
    if (currentElementIndex < elements.length - 1) {
      setCurrentElementIndex(currentElementIndex + 1);
      setShowFacts(false);
    } else {
      onNext();
    }
  };

  const handlePrevious = () => {
    if (currentElementIndex > 0) {
      setCurrentElementIndex(currentElementIndex - 1);
      setShowFacts(false);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold gradient-text mb-6">
            Space Weather Elements
          </h1>
          <p className="text-xl text-blue-200">
            Let's explore the amazing forces from our Sun!
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center space-x-3 mb-12">
          {elements.map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full transition-all duration-500 ${
                index <= currentElementIndex ? 'bg-stellar-gold w-12' : 'bg-gray-600 w-3'
              }`}
            />
          ))}
        </div>

        {/* Main Content Box */}
        <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 mb-8 animate-slide-up border border-white border-opacity-20">
          {/* Element Header */}
          <div className="text-center mb-8">
            <div className={`bg-gradient-to-r ${currentElement.color} rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 text-white animate-float`}>
              {currentElement.icon}
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {currentElement.title}
            </h2>
            <p className="text-lg text-blue-200 mb-6">
              {currentElement.description}
            </p>
          </div>

          {/* Element Details */}
          <div className="bg-black bg-opacity-30 rounded-2xl p-6 mb-8">
            <p className="text-white text-lg leading-relaxed mb-6">
              {currentElement.details}
            </p>
            
            {!showFacts ? (
              <button
                onClick={() => setShowFacts(true)}
                className="bg-gradient-to-r from-stellar-gold to-orange-500 hover:from-orange-500 hover:to-stellar-gold text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
              >
                <Sparkles className="w-5 h-5" />
                <span>Show Fun Facts</span>
              </button>
            ) : (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold text-stellar-gold mb-4 text-center">
                  🌟 Fun Facts!
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentElement.facts.map((fact, index) => (
                    <div
                      key={index}
                      className="bg-white bg-opacity-10 rounded-lg p-4 animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <p className="text-white text-sm">
                        <span className="text-stellar-gold font-bold">•</span> {fact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentElementIndex === 0}
              className={`flex items-center space-x-2 py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                currentElementIndex === 0
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white transform hover:scale-105'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <div className="text-center">
              <span className="text-blue-200 text-sm">
                {currentElementIndex + 1} of {elements.length}
              </span>
            </div>

            <button
              onClick={handleNext}
              className="group bg-gradient-to-r from-stellar-gold to-orange-500 hover:from-orange-500 hover:to-stellar-gold text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>
                {currentElementIndex === elements.length - 1 ? 'Choose Character' : 'Next'}
              </span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveSpaceWeatherElements;