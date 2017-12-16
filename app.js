const express = require('express');
const app = express();

const PORT = 5000;

app.listen(PORT, ()=>{
  console.log('Connected to '+PORT);
});

app.get('/', (req, res)=>{
  res.send('Hello, Get!');
});

app.post('/', (req, res)=>{
  res.send('Hello, Post!');
});

app.delete('/', (req, res)=>{
  res.send('Hello, Delete!');
});

app.put('/', (req, res)=>{
  res.send('Hello, PUT!');
});
