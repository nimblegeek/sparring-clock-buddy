
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
    <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
      {/* Start/Pause Button */}
      <button
        onClick={isActive ? onPause : onStart}
        className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 rounded-full text-white font-bold transition-all duration-200 hover:scale-105 shadow-lg active:scale-95 ${
          isActive 
            ? 'bg-yellow-500 hover:bg-yellow-600' 
            : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {isActive ? (
          <Pause size={window.innerWidth >= 1280 ? 48 : window.innerWidth >= 1024 ? 40 : 32} />
        ) : (
          <Play size={window.innerWidth >= 1280 ? 48 : window.innerWidth >= 1024 ? 40 : 32} />
        )}
      </button>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 rounded-full bg-gray-500 hover:bg-gray-600 text-white font-bold transition-all duration-200 hover:scale-105 shadow-lg active:scale-95"
      >
        <TimerReset size={window.innerWidth >= 1280 ? 48 : window.innerWidth >= 1024 ? 40 : 32} />
      </button>
    </div>
  );
};

export default TimerControls;
