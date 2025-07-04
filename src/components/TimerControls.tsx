
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
    <div className="flex justify-center gap-4">
      {/* Start/Pause Button */}
      <button
        onClick={isActive ? onPause : onStart}
        className={`flex items-center justify-center w-20 h-20 rounded-full text-white font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg ${
          isActive 
            ? 'bg-yellow-500 hover:bg-yellow-600' 
            : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {isActive ? <Pause size={32} /> : <Play size={32} />}
      </button>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-500 hover:bg-gray-600 text-white font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
      >
        <TimerReset size={32} />
      </button>
    </div>
  );
};

export default TimerControls;
