const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Ankit7112',
    database: 'user_data',
});

connection.connect((error) => {
    if (error) throw error;
    console.log('Database connected!');
});

app.post('/submit', (req, res) => {
    const { name, email, phone, message } = req.body;
    const sql =
        'INSERT INTO user_info (name, email, phone, message) VALUES (?, ?, ?, ?)';
    connection.query(sql, [name, email, phone, message], (error, results) => {
        if (error) {
            res.status(500).send('Error saving data');
            throw error;
        }
        res.status(200).send('Data saved successfully');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
