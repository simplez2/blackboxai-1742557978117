import React, { useState, useEffect } from 'react';

function TomatoTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimerComplete();
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleTimerComplete = () => {
    const notification = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
    notification.play();
    
    if (!isBreak) {
      setCycles(prev => prev + 1);
      setTimeLeft(5 * 60); // 5 minute break
    } else {
      setTimeLeft(25 * 60); // Back to 25 minute work session
    }
    setIsBreak(!isBreak);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setIsBreak(false);
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      {/* Timer Display */}
      <div className="card text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isBreak ? 'Break Time!' : 'Focus Time'}
        </h2>
        
        <div className="relative w-64 h-64 mx-auto mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-indigo-600">
              {formatTime(timeLeft)}
            </div>
          </div>
          <svg className="transform -rotate-90 w-full h-full">
            <circle
              cx="128"
              cy="128"
              r="120"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-200"
            />
            <circle
              cx="128"
              cy="128"
              r="120"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray="754"
              strokeDashoffset={754 * (1 - timeLeft / (isBreak ? 300 : 1500))}
              className="text-indigo-600 transition-all duration-1000 ease-linear"
            />
          </svg>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`btn-primary px-8 ${isRunning ? 'bg-red-600 hover:bg-red-700' : ''}`}
          >
            <i className={`fas fa-${isRunning ? 'pause' : 'play'} mr-2`}></i>
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button onClick={resetTimer} className="btn-secondary px-8">
            <i className="fas fa-redo mr-2"></i>Reset
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Today's Progress</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="text-2xl font-bold text-indigo-600">{cycles}</div>
            <div className="text-sm text-gray-600">Cycles</div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{Math.floor(cycles * 25)} min</div>
            <div className="text-sm text-gray-600">Focus Time</div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{Math.floor(cycles * 5)} min</div>
            <div className="text-sm text-gray-600">Break Time</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TomatoTimer;