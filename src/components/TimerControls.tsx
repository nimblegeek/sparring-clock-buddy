
import React from 'react';
import { Play, Pause, TimerReset } from 'lucide-react';

interface TimerControlsProps {
  isActive: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  isActive,
  onStart,
  onPause,
  onReset
}) => {
  return (
    <div className="flex justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-12">
      {/* Start/Pause Button */}
      <button
        onClick={isActive ? onPause : onStart}
        className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 rounded-full text-white font-bold transition-all duration-200 hover:scale-105 shadow-lg active:scale-95 ${
          isActive 
            ? 'bg-yellow-500 hover:bg-yellow-600' 
            : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {isActive ? (
          <Pause className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16" />
        ) : (
          <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16" />
        )}
      </button>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 rounded-full bg-gray-500 hover:bg-gray-600 text-white font-bold transition-all duration-200 hover:scale-105 shadow-lg active:scale-95"
      >
        <TimerReset className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16" />
      </button>
    </div>
  );
};

export default TimerControls;
