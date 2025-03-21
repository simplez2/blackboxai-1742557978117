export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { studyLog, apiUrl, apiKey } = req.body;

        try {
            // Call OpenAI API to get recommendations for plan updates
            const aiResponse = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    prompt: `Based on the following study log, suggest updates to the study plan: ${JSON.stringify(studyLog)}`,
                }),
            });

            const aiData = await aiResponse.json();

            // Update the study plan with AI recommendations
            const updatedPlan = {
                ...studyLog,
                aiRecommendations: aiData.choices[0].text,
                lastUpdated: new Date().toISOString(),
            };

            // In a real application, you would save this to a database
            res.status(200).json(updatedPlan);
        } catch (error) {
            console.error('Error updating study plan:', error);
            res.status(500).json({ error: 'Failed to update study plan' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}