
import React, { useState } from 'react';
import TimerDisplay from '@/components/TimerDisplay';
import TimerControls from '@/components/TimerControls';
import TimerSettings from '@/components/TimerSettings';
import { useTimer } from '@/hooks/useTimer';
import { Settings } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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

  const presets = [
    {
      name: "Beginner",
      description: "2min rounds, 1min rest, 3 rounds",
      roundMins: 2,
      roundSecs: 0,
      restMins: 1,
      restSecs: 0,
      rounds: 3
    },
    {
      name: "Standard",
      description: "3min rounds, 1min rest, 5 rounds",
      roundMins: 3,
      roundSecs: 0,
      restMins: 1,
      restSecs: 0,
      rounds: 5
    },
    {
      name: "Intense",
      description: "5min rounds, 1:30 rest, 3 rounds",
      roundMins: 5,
      roundSecs: 0,
      restMins: 1,
      restSecs: 30,
      rounds: 3
    }
  ];

  const applyPreset = (preset: typeof presets[0]) => {
    setRoundMinutes(preset.roundMins);
    setRoundSeconds(preset.roundSecs);
    setRestMinutes(preset.restMins);
    setRestSeconds(preset.restSecs);
    setTotalRounds(preset.rounds);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        <div className="p-4 pb-safe">
          {/* Header with Settings */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-center flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Martial Arts Timer
              </h1>
              <p className="text-gray-600 text-sm sm:text-base mt-1">
                Professional sparring timer
              </p>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <Settings size={24} className="text-gray-700" />
                </button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[85vh] overflow-y-auto">
                <div className="space-y-6">
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
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Quick Presets</h3>
                    <div className="space-y-2">
                      {presets.map((preset, index) => (
                        <button
                          key={index}
                          onClick={() => applyPreset(preset)}
                          className="w-full p-3 text-left bg-white hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                        >
                          <div className="font-semibold text-gray-800">{preset.name}</div>
                          <div className="text-sm text-gray-600">{preset.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Timer Display */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 mb-6">
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
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
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
      </div>

      {/* Desktop/TV Layout */}
      <div className="hidden lg:block p-4 xl:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold text-gray-800 mb-2">
              Martial Arts Timer
            </h1>
            <p className="text-gray-600 text-lg xl:text-xl 2xl:text-2xl">
              Professional sparring timer for your training sessions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Timer Display - Takes up more space on large screens */}
            <div className="lg:col-span-2 xl:col-span-3">
              <div className="bg-white p-8 xl:p-12 2xl:p-16 rounded-2xl shadow-lg border border-gray-200">
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
                    <div className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-green-600 mb-2">
                      Training Complete! 🥊
                    </div>
                    <p className="text-gray-600 xl:text-lg 2xl:text-xl">
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
            <div className="lg:col-span-1 xl:col-span-1">
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
                <h3 className="text-xl xl:text-2xl font-bold text-gray-800 mb-4 text-center">Quick Presets</h3>
                <div className="space-y-3">
                  {presets.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => applyPreset(preset)}
                      className="w-full p-3 xl:p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <div className="font-semibold xl:text-lg">{preset.name}</div>
                      <div className="text-sm xl:text-base text-gray-600">{preset.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
