
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
    <div className="bg-white p-4 sm:p-6 md:p-5 lg:p-6 xl:p-6 2xl:p-8 rounded-2xl shadow-lg border border-gray-200">
      <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-4 lg:mb-6 xl:mb-6 2xl:mb-8 text-center">Timer Settings</h3>
      
      <div className="space-y-4 sm:space-y-6 md:space-y-4 lg:space-y-6 xl:space-y-6 2xl:space-y-8">
        {/* Round Duration */}
        <div>
          <label className="block text-base sm:text-lg md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-semibold text-gray-700 mb-2 sm:mb-3 md:mb-2 lg:mb-3 xl:mb-3 2xl:mb-4">
            Round Duration
          </label>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-4">
            <div className="flex items-center gap-1 sm:gap-2 md:gap-1 lg:gap-2 xl:gap-2 2xl:gap-3">
              <input
                type="number"
                min="0"
                max="59"
                value={roundMinutes}
                onChange={(e) => onRoundTimeChange(Number(e.target.value), roundSeconds)}
                className="w-16 sm:w-20 md:w-16 lg:w-20 xl:w-20 2xl:w-24 p-2 md:p-2 lg:p-2 xl:p-3 2xl:p-4 text-center border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-base sm:text-lg md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-semibold"
              />
              <span className="text-gray-600 font-medium text-sm sm:text-base md:text-sm lg:text-base xl:text-base 2xl:text-lg">min</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 md:gap-1 lg:gap-2 xl:gap-2 2xl:gap-3">
              <input
                type="number"
                min="0"
                max="59"
                value={roundSeconds}
                onChange={(e) => onRoundTimeChange(roundMinutes, Number(e.target.value))}
                className="w-16 sm:w-20 md:w-16 lg:w-20 xl:w-20 2xl:w-24 p-2 md:p-2 lg:p-2 xl:p-3 2xl:p-4 text-center border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-base sm:text-lg md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-semibold"
              />
              <span className="text-gray-600 font-medium text-sm sm:text-base md:text-sm lg:text-base xl:text-base 2xl:text-lg">sec</span>
            </div>
          </div>
        </div>

        {/* Rest Duration */}
        <div>
          <label className="block text-base sm:text-lg md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-semibold text-gray-700 mb-2 sm:mb-3 md:mb-2 lg:mb-3 xl:mb-3 2xl:mb-4">
            Rest Duration
          </label>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-4">
            <div className="flex items-center gap-1 sm:gap-2 md:gap-1 lg:gap-2 xl:gap-2 2xl:gap-3">
              <input
                type="number"
                min="0"
                max="59"
                value={restMinutes}
                onChange={(e) => onRestTimeChange(Number(e.target.value), restSeconds)}
                className="w-16 sm:w-20 md:w-16 lg:w-20 xl:w-20 2xl:w-24 p-2 md:p-2 lg:p-2 xl:p-3 2xl:p-4 text-center border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-base sm:text-lg md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-semibold"
              />
              <span className="text-gray-600 font-medium text-sm sm:text-base md:text-sm lg:text-base xl:text-base 2xl:text-lg">min</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 md:gap-1 lg:gap-2 xl:gap-2 2xl:gap-3">
              <input
                type="number"
                min="0"
                max="59"
                value={restSeconds}
                onChange={(e) => onRestTimeChange(restMinutes, Number(e.target.value))}
                className="w-16 sm:w-20 md:w-16 lg:w-20 xl:w-20 2xl:w-24 p-2 md:p-2 lg:p-2 xl:p-3 2xl:p-4 text-center border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-base sm:text-lg md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-semibold"
              />
              <span className="text-gray-600 font-medium text-sm sm:text-base md:text-sm lg:text-base xl:text-base 2xl:text-lg">sec</span>
            </div>
          </div>
        </div>

        {/* Total Rounds */}
        <div>
          <label className="block text-base sm:text-lg md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-semibold text-gray-700 mb-2 sm:mb-3 md:mb-2 lg:mb-3 xl:mb-3 2xl:mb-4">
            Total Rounds
          </label>
          <input
            type="number"
            min="1"
            max="20"
            value={totalRounds}
            onChange={(e) => onTotalRoundsChange(Number(e.target.value))}
            className="w-20 sm:w-24 md:w-20 lg:w-24 xl:w-24 2xl:w-28 p-2 md:p-2 lg:p-2 xl:p-3 2xl:p-4 text-center border-2 border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none text-base sm:text-lg md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default TimerSettings;
