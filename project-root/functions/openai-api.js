export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { prompt } = req.body;
        const apiUrl = process.env.OPENAI_API_URL; // Use environment variable for the API URL

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Use environment variable for the API key
                },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            console.error('Error fetching from OpenAI API:', error);
            res.status(500).json({ error: 'Failed to fetch from OpenAI API' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}