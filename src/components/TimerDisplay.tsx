
import React from 'react';

interface TimerDisplayProps {
  minutes: number;
  seconds: number;
  isActive: boolean;
  isResting: boolean;
  currentRound: number;
  totalRounds: number;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({
  minutes,
  seconds,
  isActive,
  isResting,
  currentRound,
  totalRounds
}) => {
  const formatTime = (mins: number, secs: number) => {
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-center">
      {/* Round Counter */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          Round {currentRound} of {totalRounds}
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-red-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${(currentRound / totalRounds) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Timer Display */}
      <div className={`relative mb-8 p-8 rounded-3xl transition-all duration-300 ${
        isResting 
          ? 'bg-blue-100 border-4 border-blue-400' 
          : 'bg-red-100 border-4 border-red-400'
      }`}>
        <div className={`text-8xl font-bold font-mono transition-colors duration-300 ${
          isResting ? 'text-blue-600' : 'text-red-600'
        }`}>
          {formatTime(minutes, seconds)}
        </div>
        
        {/* Status Indicator */}
        <div className={`mt-4 text-2xl font-semibold transition-colors duration-300 ${
          isResting ? 'text-blue-600' : 'text-red-600'
        }`}>
          {isResting ? 'REST' : 'FIGHT'}
        </div>
        
        {/* Active Indicator */}
        {isActive && (
          <div className="absolute -top-2 -right-2">
            <div className={`w-6 h-6 rounded-full animate-pulse ${
              isResting ? 'bg-blue-500' : 'bg-red-500'
            }`}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimerDisplay;
