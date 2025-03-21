const apiUrl = localStorage.getItem('openaiApiUrl') || process.env.REACT_APP_DEFAULT_API_URL;

export const getAISummary = async (data) => {
    const response = await fetch(`${apiUrl}/openai-api`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Failed to fetch AI summary');
    }
    return response.json();
};

export const updatePlan = async (data) => {
    const response = await fetch(`${apiUrl}/update-plan`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Failed to update plan');
    }
    return response.json();
};

export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`${apiUrl}/upload-file`, {
        method: 'POST',
        body: formData,
    });
    if (!response.ok) {
        throw new Error('Failed to upload file');
    }
    return response.json();
};

export const triggerNotification = async (data) => {
    const response = await fetch(`${apiUrl}/notifications`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Failed to trigger notification');
    }
    return response.json();
};