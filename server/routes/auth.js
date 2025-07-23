const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db=require('../db');

const q1 = `USE users`;
db.query(q1, (err,res)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log('Used db success');
        console.log(res);
    }
});

const q2 = `CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), 
                email VARCHAR(100) UNIQUE, password VARCHAR(255), phno VARCHAR(100))`;
db.query(q2, (err,res)=>{
    if(err){
        console.error(err);
    }else{
        console.log('Table created successfully.');
        console.log(res);
    }
});

//REGISTRATION 
router.post('/register', (req, res)=>{
    const {name, email, password, phno} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const q3 = `INSERT INTO user(name, email, password, phno) VALUES (?, ?, ?, ?)`;
    db.query(q3,[name, email, hashedPassword, phno], (err, result)=>{
        if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'Email already exists' });
        }
        return res.status(500).json({ error: err.message });  // ✅ Added return here
    }
    return res.json({ message: 'User registered successfully' });  // ✅ Also return this
    });
});

//LOGIN
router.post('/login', (req, res)=>{
     console.log("Login route hit");
    const { email, password } = req.body;
  const q4 = `SELECT * FROM user WHERE email = ?`;

  db.query(q4, [email], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(400).json({ error: 'User not found' });

    const user = results[0];
    console.log(email, password, user.password);
    const isMatch = bcrypt.compareSync(password, user.password);
    console.log(isMatch);
    if (!isMatch) return res.status(400).json({ error: 'Invalid password' });

    res.json({ message: 'Login successful', user: { id: user.id, name: user.name, email: user.email } });
  });
});

module.exports = router;