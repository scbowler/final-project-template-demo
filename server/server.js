import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import errorMiddleware from './lib/error-middleware.js';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
