
import React from 'react';

interface TimerSettingsProps {
  roundMinutes: number;
  roundSeconds: number;
  restMinutes: number;
  restSeconds: number;
  totalRounds: number;
  onRoundTimeChange: (minutes: number, seconds: number) => void;
  onRestTimeChange: (minutes: number, seconds: number) => void;
  onTotalRoundsChange: (rounds: number) => void;
}

const TimerSettings: React.FC<TimerSettingsProps> = ({
  roundMinutes,
  roundSeconds,
  restMinutes,
  restSeconds,
  totalRounds,
  onRoundTimeChange,
  onRestTimeChange,
  onTotalRoundsChange
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Timer Settings</h3>
      
      <div className="space-y-6">
        {/* Round Duration */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            Round Duration
          </label>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                max="59"
                value={roundMinutes}
                onChange={(e) => onRoundTimeChange(Number(e.target.value), roundSeconds)}
                className="w-20 p-2 text-center border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-lg font-semibold"
              />
              <span className="text-gray-600 font-medium">min</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                max="59"
                value={roundSeconds}
                onChange={(e) => onRoundTimeChange(roundMinutes, Number(e.target.value))}
                className="w-20 p-2 text-center border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-lg font-semibold"
              />
              <span className="text-gray-600 font-medium">sec</span>
            </div>
          </div>
        </div>

        {/* Rest Duration */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            Rest Duration
          </label>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                max="59"
                value={restMinutes}
                onChange={(e) => onRestTimeChange(Number(e.target.value), restSeconds)}
                className="w-20 p-2 text-center border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-semibold"
              />
              <span className="text-gray-600 font-medium">min</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                max="59"
                value={restSeconds}
                onChange={(e) => onRestTimeChange(restMinutes, Number(e.target.value))}
                className="w-20 p-2 text-center border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-semibold"
              />
              <span className="text-gray-600 font-medium">sec</span>
            </div>
          </div>
        </div>

        {/* Total Rounds */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            Total Rounds
          </label>
          <input
            type="number"
            min="1"
            max="20"
            value={totalRounds}
            onChange={(e) => onTotalRoundsChange(Number(e.target.value))}
            className="w-24 p-2 text-center border-2 border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none text-lg font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default TimerSettings;
