const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Fixers',
  password: 'Fixers123',
  database: 'Fixers'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});
app.post('/submit', (req, res) => {
    const { student_number, date, time, doctor } = req.body;
  
    const query = 'INSERT INTO collected_data (student_number, date, time, doctor) VALUES (?, ?, ?, ?)';
    connection.query(query, [student_number, date, time, doctor], (err, result) => {
      if (err) throw err;
      res.send('Data saved to the database');
    });
  });
  