
import React, { useState } from 'react';
import TimerDisplay from '@/components/TimerDisplay';
import TimerControls from '@/components/TimerControls';
import TimerSettings from '@/components/TimerSettings';
import { useTimer } from '@/hooks/useTimer';

const Index = () => {
  // Timer settings state
  const [roundMinutes, setRoundMinutes] = useState(3);
  const [roundSeconds, setRoundSeconds] = useState(0);
  const [restMinutes, setRestMinutes] = useState(1);
  const [restSeconds, setRestSeconds] = useState(0);
  const [totalRounds, setTotalRounds] = useState(5);

  // Use custom timer hook
  const {
    minutes,
    seconds,
    isActive,
    isResting,
    currentRound,
    isCompleted,
    start,
    pause,
    reset
  } = useTimer({
    roundMinutes,
    roundSeconds,
    restMinutes,
    restSeconds,
    totalRounds
  });

  const handleRoundTimeChange = (mins: number, secs: number) => {
    setRoundMinutes(mins);
    setRoundSeconds(secs);
  };

  const handleRestTimeChange = (mins: number, secs: number) => {
    setRestMinutes(mins);
    setRestSeconds(secs);
  };

  const handleTotalRoundsChange = (rounds: number) => {
    setTotalRounds(rounds);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Martial Arts Timer
          </h1>
          <p className="text-gray-600 text-lg">
            Professional sparring timer for your training sessions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timer Display - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <TimerDisplay
                minutes={minutes}
                seconds={seconds}
                isActive={isActive}
                isResting={isResting}
                currentRound={currentRound}
                totalRounds={totalRounds}
              />
              
              {/* Completion Message */}
              {isCompleted && (
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    Training Complete! 🥊
                  </div>
                  <p className="text-gray-600">
                    Great job! You completed all {totalRounds} rounds.
                  </p>
                </div>
              )}
              
              <TimerControls
                isActive={isActive}
                onStart={start}
                onPause={pause}
                onReset={reset}
              />
            </div>
          </div>

          {/* Settings Panel */}
          <div className="lg:col-span-1">
            <TimerSettings
              roundMinutes={roundMinutes}
              roundSeconds={roundSeconds}
              restMinutes={restMinutes}
              restSeconds={restSeconds}
              totalRounds={totalRounds}
              onRoundTimeChange={handleRoundTimeChange}
              onRestTimeChange={handleRestTimeChange}
              onTotalRoundsChange={handleTotalRoundsChange}
            />
            
            {/* Quick Presets */}
            <div className="mt-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Quick Presets</h3>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setRoundMinutes(2);
                    setRoundSeconds(0);
                    setRestMinutes(1);
                    setRestSeconds(0);
                    setTotalRounds(3);
                  }}
                  className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="font-semibold">Beginner</div>
                  <div className="text-sm text-gray-600">2min rounds, 1min rest, 3 rounds</div>
                </button>
                
                <button
                  onClick={() => {
                    setRoundMinutes(3);
                    setRoundSeconds(0);
                    setRestMinutes(1);
                    setRestSeconds(0);
                    setTotalRounds(5);
                  }}
                  className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="font-semibold">Standard</div>
                  <div className="text-sm text-gray-600">3min rounds, 1min rest, 5 rounds</div>
                </button>
                
                <button
                  onClick={() => {
                    setRoundMinutes(5);
                    setRoundSeconds(0);
                    setRestMinutes(1);
                    setRestSeconds(30);
                    setTotalRounds(3);
                  }}
                  className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="font-semibold">Intense</div>
                  <div className="text-sm text-gray-600">5min rounds, 1:30 rest, 3 rounds</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
