import React, { useState } from 'react';
import { ChevronRight, Wheat, Fish, Zap, CheckCircle } from 'lucide-react';

interface HumanImpactProps {
  onNext: () => void;
}

interface Character {
  id: string;
  name: string;
  icon: React.ReactNode;
  emoji: string;
  description: string;
  impact: string;
  solutions: string[];
  color: string;
}

const HumanImpact: React.FC<HumanImpactProps> = ({ onNext }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);

  const characters: Character[] = [
    {
      id: 'farmer',
      name: 'Farmer',
      icon: <Wheat className="w-12 h-12" />,
      emoji: '🌾',
      description: 'Growing crops and feeding communities',
      impact: 'Solar storms can disrupt GPS systems used for precision farming, affecting crop monitoring, automated tractors, and irrigation systems. This can lead to reduced crop yields and food security issues.',
      solutions: [
        'Use backup navigation systems during solar storm warnings',
        'Monitor space weather forecasts before critical farming operations',
        'Implement manual override systems for automated equipment',
        'Diversify farming techniques to reduce GPS dependency'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'fisherman',
      name: 'Fisherman',
      icon: <Fish className="w-12 h-12" />,
      emoji: '🎣',
      description: 'Navigating the vast oceans to catch fish',
      impact: 'GPS navigation failures during geomagnetic storms can leave fishermen lost at sea, unable to find their way back to shore or locate fishing grounds. This puts lives at risk and affects livelihoods.',
      solutions: [
        'Carry traditional compass and paper charts as backup',
        'Learn celestial navigation techniques',
        'Stay informed about space weather conditions',
        'Use multiple navigation systems for redundancy'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'grid-operator',
      name: 'Grid Operator',
      icon: <Zap className="w-12 h-12" />,
      emoji: '⚡',
      description: 'Managing electrical power systems',
      impact: 'Geomagnetic storms can induce currents in power lines, causing transformer damage, blackouts, and cascading failures across the electrical grid, affecting millions of people.',
      solutions: [
        'Monitor space weather alerts and forecasts',
        'Implement protective relay systems',
        'Have backup power generation ready',
        'Coordinate with other grid operators during storms'
      ],
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const quizQuestions = [
    {
      question: "A solar storm warning has been issued. As a fisherman, what should you do?",
      options: [
        "Ignore it and continue fishing",
        "Check backup navigation equipment and consider returning to shore",
        "Only rely on GPS navigation",
        "Go further out to sea"
      ],
      correct: 1
    }
  ];

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
    setTimeout(() => setShowQuiz(true), 3000);
  };

  const handleQuizAnswer = (answerIndex: number) => {
    setQuizAnswer(answerIndex === quizQuestions[0].correct ? 'correct' : 'incorrect');
  };

  if (selectedCharacter && !showQuiz) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Character Animation */}
          <div className="mb-8 animate-fade-in">
            <div className={`bg-gradient-to-r ${selectedCharacter.color} rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 animate-float`}>
              {selectedCharacter.icon}
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet the {selectedCharacter.name}
            </h2>
            <p className="text-xl text-blue-200">
              {selectedCharacter.description}
            </p>
          </div>

          {/* Impact Story */}
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 mb-8 animate-slide-up">
            <h3 className="text-2xl font-bold text-stellar-gold mb-4">
              How Space Weather Affects Their Life
            </h3>
            <p className="text-lg text-white leading-relaxed">
              {selectedCharacter.impact}
            </p>
          </div>

          {/* Loading indicator for quiz */}
          <div className="flex items-center justify-center space-x-2 text-blue-200">
            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-stellar-gold"></div>
            <span>Preparing interactive quiz...</span>
          </div>
        </div>
      </div>
    );
  }

  if (showQuiz) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Solutions Section */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold gradient-text text-center mb-8">
              Solutions & Preparation
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {selectedCharacter!.solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 flex items-start space-x-4 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-white">{solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quiz Section */}
          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-8 animate-slide-up">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{selectedCharacter!.emoji}</div>
              <h3 className="text-2xl font-bold text-stellar-gold mb-4">
                Quick Quiz!
              </h3>
              <p className="text-lg text-white mb-6">
                {quizQuestions[0].question}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {quizQuestions[0].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQuizAnswer(index)}
                  disabled={quizAnswer !== null}
                  className={`p-4 rounded-xl text-left transition-all duration-300 ${
                    quizAnswer === null
                      ? 'bg-white bg-opacity-10 hover:bg-opacity-20 text-white'
                      : quizAnswer === 'correct' && index === quizQuestions[0].correct
                      ? 'bg-green-500 text-white'
                      : quizAnswer === 'incorrect' && index === quizQuestions[0].correct
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 bg-opacity-50 text-white'
                  }`}
                >
                  <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              ))}
            </div>

            {quizAnswer && (
              <div className="text-center animate-fade-in">
                <p className={`text-xl font-bold mb-6 ${
                  quizAnswer === 'correct' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {quizAnswer === 'correct' ? '🎉 Correct! Great thinking!' : '❌ Not quite right, but good try!'}
                </p>
                <button
                  onClick={onNext}
                  className="group bg-gradient-to-r from-stellar-gold to-orange-500 hover:from-orange-500 hover:to-stellar-gold text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-glow flex items-center space-x-2 mx-auto"
                >
                  <span>Go to Space Weather Prediction</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold gradient-text mb-6">
            Human Impact
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Choose a character to see how space weather affects their daily life
          </p>
        </div>

        {/* Character Selection */}
        <div className="grid md:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <div
              key={character.id}
              className="group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleCharacterSelect(character)}
            >
              <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:bg-opacity-50 border border-white border-opacity-20 text-center">
                <div className="text-6xl mb-6">{character.emoji}</div>
                <div className={`bg-gradient-to-r ${character.color} rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto text-white group-hover:animate-pulse`}>
                  {character.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {character.name}
                </h3>
                <p className="text-blue-200 leading-relaxed mb-6">
                  {character.description}
                </p>
                <div className="text-stellar-gold font-semibold group-hover:underline">
                  Choose This Role →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HumanImpact;