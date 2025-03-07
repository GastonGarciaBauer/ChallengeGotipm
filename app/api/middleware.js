import Cors from 'cors';

// Inicializa el middleware CORS
const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  origin: 'http://localhost:3000', // Asegúrate de que sea el dominio de tu frontend
});

// Helper para ejecutar el middleware
const runMiddleware = (req, res, fn) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  // Aquí puedes manejar la lógica de la API como lo haces normalmente
  if (req.method === 'POST') {
    // Lógica para crear un empleado
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
