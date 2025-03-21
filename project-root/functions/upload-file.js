export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const formData = req.body;
            const file = formData.get('file');

            if (!file) {
                return res.status(400).json({ error: 'No file provided' });
            }

            // Validate file type
            const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
            if (!allowedTypes.includes(file.type)) {
                return res.status(400).json({ error: 'Invalid file type' });
            }

            // In a real application, you would:
            // 1. Generate a unique filename
            // 2. Save the file to storage (e.g., Cloudflare R2, AWS S3)
            // 3. Return the file URL

            // For now, we'll return a mock response
            res.status(200).json({
                message: 'File uploaded successfully',
                fileName: file.name,
                fileType: file.type,
                fileSize: file.size,
                uploadedAt: new Date().toISOString(),
            });
        } catch (error) {
            console.error('Error uploading file:', error);
            res.status(500).json({ error: 'Failed to upload file' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}