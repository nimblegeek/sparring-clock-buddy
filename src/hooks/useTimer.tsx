
import { useState, useEffect, useCallback } from 'react';

interface UseTimerProps {
  roundMinutes: number;
  roundSeconds: number;
  restMinutes: number;
  restSeconds: number;
  totalRounds: number;
}

export const useTimer = ({
  roundMinutes,
  roundSeconds,
  restMinutes,
  restSeconds,
  totalRounds
}: UseTimerProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isResting, setIsResting] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [timeLeft, setTimeLeft] = useState(roundMinutes * 60 + roundSeconds);
  const [isCompleted, setIsCompleted] = useState(false);

  const roundDuration = roundMinutes * 60 + roundSeconds;
  const restDuration = restMinutes * 60 + restSeconds;

  // Reset timer when settings change
  useEffect(() => {
    if (!isActive) {
      setTimeLeft(roundDuration);
      setIsResting(false);
      setCurrentRound(1);
      setIsCompleted(false);
    }
  }, [roundMinutes, roundSeconds, restMinutes, restSeconds, totalRounds, isActive, roundDuration]);

  const playBeep = useCallback(async () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = isResting ? 440 : 880; // Different tones for fight/rest
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
      console.log('Audio not supported');
    }
  }, [isResting]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0 && !isCompleted) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isCompleted) {
      playBeep();
      
      if (isResting) {
        // Rest period ended, start next round
        if (currentRound < totalRounds) {
          setCurrentRound(prev => prev + 1);
          setIsResting(false);
          setTimeLeft(roundDuration);
        } else {
          // All rounds completed
          setIsCompleted(true);
          setIsActive(false);
        }
      } else {
        // Round ended, start rest period
        if (currentRound < totalRounds) {
          setIsResting(true);
          setTimeLeft(restDuration);
        } else {
          // Final round completed
          setIsCompleted(true);
          setIsActive(false);
        }
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, isResting, currentRound, totalRounds, roundDuration, restDuration, isCompleted, playBeep]);

  const start = () => setIsActive(true);
  const pause = () => setIsActive(false);
  
  const reset = () => {
    setIsActive(false);
    setIsResting(false);
    setCurrentRound(1);
    setTimeLeft(roundDuration);
    setIsCompleted(false);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return {
    minutes,
    seconds,
    isActive,
    isResting,
    currentRound,
    isCompleted,
    start,
    pause,
    reset
  };
};
