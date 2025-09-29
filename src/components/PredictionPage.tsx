import React, { useState, useEffect } from 'react';
import { ArrowLeft, Satellite, Brain, Eye, Globe, Heart } from 'lucide-react';

interface PredictionPageProps {
  onBack: () => void;
}

const PredictionPage: React.FC<PredictionPageProps> = ({ onBack }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [solarActivity, setSolarActivity] = useState(Math.floor(Math.random() * 100));

  const phases = [
    {
      title: "Satellite Monitoring",
      icon: <Satellite className="w-16 h-16" />,
      description: "Advanced satellites continuously monitor the Sun's activity, detecting solar flares and coronal mass ejections in real-time."
    },
    {
      title: "AI Analysis",
      icon: <Brain className="w-16 h-16" />,
      description: "Artificial intelligence systems analyze vast amounts of solar data to predict space weather patterns and potential impacts."
    },
    {
      title: "Ground Observatories",
      icon: <Eye className="w-16 h-16" />,
      description: "Earth-based observatories work together with space missions to provide comprehensive space weather monitoring."
    },
    {
      title: "Global Alerts",
      icon: <Globe className="w-16 h-16" />,
      description: "Warning systems alert governments, airlines, power companies, and the public about incoming space weather events."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % phases.length);
      setSolarActivity(Math.floor(Math.random() * 100));
    }, 4000);

    return () => clearInterval(timer);
  }, [phases.length]);

  return (
    <div className="min-h-screen py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header with older character */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative mb-8">
            {/* Futuristic background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            
            {/* Older Anime Character */}
            <div className="relative anime-character animate-float mx-auto w-fit">
              <div className="w-64 h-64 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full relative overflow-hidden">
                {/* Face */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                  {/* Hair - longer, more mature */}
                  <div className="w-28 h-16 bg-gradient-to-b from-amber-800 to-amber-700 rounded-t-full mb-2"></div>
                  
                  {/* Head */}
                  <div className="w-24 h-28 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full relative">
                    {/* Eyes - more determined */}
                    <div className="absolute top-6 left-3 w-5 h-6 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full">
                      <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full animate-twinkle"></div>
                    </div>
                    <div className="absolute top-6 right-3 w-5 h-6 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full">
                      <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full animate-twinkle"></div>
                    </div>
                    
                    {/* Confident smile */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-green-600 rounded-b-full"></div>
                  </div>
                </div>
                
                {/* Body - more mature clothing */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-28 bg-gradient-to-b from-indigo-600 to-indigo-700 rounded-t-lg">
                  {/* Arms */}
                  <div className="absolute -left-5 top-3 w-5 h-14 bg-orange-200 rounded-full"></div>
                  <div className="absolute -right-5 top-3 w-5 h-14 bg-orange-200 rounded-full"></div>
                  
                  {/* Tablet/Device */}
                  <div className="absolute -right-7 top-6 w-3 h-5 bg-gray-800 border border-gray-600 rounded-sm">
                    <div className="w-full h-1 bg-blue-400 mt-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl font-bold gradient-text mb-6">
            Space Weather Prediction
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            How scientists predict and monitor space weather to protect our world
          </p>
        </div>

        {/* Futuristic City Background */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-t from-space-blue to-transparent rounded-2xl"></div>
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Current Phase */}
              <div className="animate-slide-up">
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 text-white animate-pulse">
                    {phases[currentPhase].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {phases[currentPhase].title}
                  </h3>
                  <p className="text-blue-200 leading-relaxed">
                    {phases[currentPhase].description}
                  </p>
                </div>
              </div>

              {/* Solar Activity Monitor */}
              <div className="animate-slide-up">
                <div className="bg-black bg-opacity-40 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-stellar-gold mb-4 text-center">
                    Live Solar Activity Monitor
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white">Solar Activity Level:</span>
                      <span className={`font-bold ${
                        solarActivity > 70 ? 'text-red-400' : 
                        solarActivity > 40 ? 'text-yellow-400' : 'text-green-400'
                      }`}>
                        {solarActivity}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 ${
                          solarActivity > 70 ? 'bg-gradient-to-r from-red-500 to-red-600' : 
                          solarActivity > 40 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 
                          'bg-gradient-to-r from-green-500 to-green-600'
                        }`}
                        style={{ width: `${solarActivity}%` }}
                      ></div>
                    </div>
                    <div className="text-center">
                      <span className={`text-sm font-semibold ${
                        solarActivity > 70 ? 'text-red-400' : 
                        solarActivity > 40 ? 'text-yellow-400' : 'text-green-400'
                      }`}>
                        {solarActivity > 70 ? 'HIGH ALERT' : 
                         solarActivity > 40 ? 'MODERATE' : 'QUIET'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase Indicators */}
        <div className="flex justify-center space-x-4 mb-16">
          {phases.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index === currentPhase ? 'bg-stellar-gold scale-125' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Final Message */}
        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 text-center animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-red-400 mr-3" />
            <h2 className="text-3xl font-bold gradient-text">
              A Message from Our Young Scientist
            </h2>
            <Heart className="w-8 h-8 text-red-400 ml-3" />
          </div>
          <p className="text-xl text-white leading-relaxed mb-8 max-w-4xl mx-auto">
            "Space weather affects all of us—from the fisherman navigating the seas to the farmer growing our food, 
            from the pilot flying overhead to the engineer managing our power grid. By understanding and predicting 
            these cosmic forces, we can protect lives, preserve technology, and build a more resilient future. 
            Stay informed, stay prepared, and help spread awareness about the invisible forces that connect us all 
            to the stars."
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onBack}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Start Over</span>
            </button>
            
            <a
              href="https://www.nasa.gov/space-weather"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-stellar-gold to-orange-500 hover:from-orange-500 hover:to-stellar-gold text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Learn More from NASA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;