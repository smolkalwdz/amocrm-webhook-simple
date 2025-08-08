// URL вашей канбан-доски
const KANBAN_API_URL = 'https://smolkalwdz-kanban-backend-3d00.twc1.net';

// Vercel Serverless Function
module.exports = async (req, res) => {
  // Включаем CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Обрабатываем OPTIONS запросы
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Только GET запросы
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  res.json({ 
    message: 'Сервер работает!', 
    timestamp: new Date().toISOString(),
    kanbanUrl: KANBAN_API_URL,
    endpoints: {
      webhook: '/api/amo-webhook',
      test: '/api/test'
    }
  });
}; 