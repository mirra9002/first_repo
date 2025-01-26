

const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;


const cors = require('cors');
app.use(cors());  // Разрешаем CORS


const client = new Client({
  user: 'postgres', 
  host: 'localhost',
  database: 'database2025',
  password: 'mirrapro',
  port: 5432,
});



client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));


app.get('/data', (req, res) => {
    client.query('SELECT * FROM first_table', (err, result) => {
      if (err) {
        res.status(500).send('Error querying the database');
        return;
      }
      res.json(result.rows);  // Отправляем данные в формате JSON
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });