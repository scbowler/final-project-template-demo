import 'dotenv/config';
import express from 'express';
import errorMiddleware from './lib/error-middleware.js';
import db from './db.js';

const app = express();

app.use(express.static('client/build'));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Example route with db query
app.get('/api/example', async (req, res) => {
  const sql = `
    select * from "yourTable";
  `;

  const result = await db.query(sql);

  res.json(result.rows);
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
