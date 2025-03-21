import React, { useState, useEffect } from 'react';

const TomatoTimer = () => {
    const [isActive, setIsActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds

    useEffect(() => {
        let timer;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            alert('Time is up! Take a break.');
            setIsActive(false);
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft]);

    const handleStart = () => {
        setIsActive(true);
    };

    const handlePause = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setTimeLeft(1500);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Tomato Timer</h1>
            <div className="text-4xl font-mono">{formatTime(timeLeft)}</div>
            <div className="mt-4">
                <button onClick={handleStart} className="bg-green-500 text-white p-2 mr-2">
                    Start
                </button>
                <button onClick={handlePause} className="bg-yellow-500 text-white p-2 mr-2">
                    Pause
                </button>
                <button onClick={handleReset} className="bg-red-500 text-white p-2">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default TomatoTimer;