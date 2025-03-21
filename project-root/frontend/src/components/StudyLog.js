import React, { useState } from 'react';

const StudyLog = () => {
    const [topic, setTopic] = useState('');
    const [duration, setDuration] = useState('');
    const [notes, setNotes] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Logic to handle submission of study log
        const logData = { topic, duration, notes };
        // Call API to save logData
        console.log('Submitting log:', logData);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Study Log</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <div>
                    <label className="block">Study Topic:</label>
                    <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div className="mt-2">
                    <label className="block">Duration (in minutes):</label>
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div className="mt-2">
                    <label className="block">Notes:</label>
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="border p-2 w-full"
                    />
                </div>
                <div className="mt-2">
                    <label className="block">Upload File:</label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="border p-2 w-full"
                    />
                </div>
                <button type="submit" className="mt-4 bg-blue-500 text-white p-2">
                    Submit Log
                </button>
            </form>
        </div>
    );
};

export default StudyLog;