import React, { useEffect, useState } from 'react';
import { getAISummary } from '../api';

const AISummary = () => {
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchSummary = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await getAISummary({ /* Add any necessary data here */ });
            setSummary(data.summary);
        } catch (err) {
            setError('Failed to fetch AI summary');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSummary();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">AI Summary</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {summary && <p>{summary}</p>}
            <button onClick={fetchSummary} className="mt-4 bg-blue-500 text-white p-2">
                Refresh Summary
            </button>
        </div>
    );
};

export default AISummary;