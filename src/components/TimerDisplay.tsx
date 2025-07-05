
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
      <div className="mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold text-gray-700 mb-2 md:mb-3 lg:mb-4 xl:mb-6">
          Round {currentRound} of {totalRounds}
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 md:h-3 lg:h-4 xl:h-5 2xl:h-6">
          <div 
            className="bg-red-600 h-2 sm:h-3 md:h-3 lg:h-4 xl:h-5 2xl:h-6 rounded-full transition-all duration-300"
            style={{ width: `${(currentRound / totalRounds) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Timer Display */}
      <div className={`relative mb-6 sm:mb-8 md:mb-8 lg:mb-12 xl:mb-16 2xl:mb-20 p-4 sm:p-6 md:p-6 lg:p-8 xl:p-12 2xl:p-20 rounded-2xl md:rounded-2xl lg:rounded-3xl xl:rounded-3xl transition-all duration-300 ${
        isResting 
          ? 'bg-blue-100 border-2 sm:border-4 md:border-3 lg:border-4 xl:border-6 border-blue-400' 
          : 'bg-red-100 border-2 sm:border-4 md:border-3 lg:border-4 xl:border-6 border-red-400'
      }`}>
        <div className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[14rem] font-bold font-mono transition-colors duration-300 leading-none ${
          isResting ? 'text-blue-600' : 'text-red-600'
        }`}>
          {formatTime(minutes, seconds)}
        </div>
        
        {/* Status Indicator */}
        <div className={`mt-2 sm:mt-4 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-12 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-6xl font-semibold transition-colors duration-300 ${
          isResting ? 'text-blue-600' : 'text-red-600'
        }`}>
          {isResting ? 'REST' : 'FIGHT'}
        </div>
        
        {/* Active Indicator */}
        {isActive && (
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-2 md:-right-2 lg:-top-3 lg:-right-3 xl:-top-4 xl:-right-4">
            <div className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12 rounded-full animate-pulse ${
              isResting ? 'bg-blue-500' : 'bg-red-500'
            }`}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimerDisplay;
