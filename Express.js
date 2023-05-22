const express = require('express');
const app = express();

// Ćwiczenie A
app.get('/url1', (req, res) => {
  res.send('Odpowiedź dla url1');
});

app.get('/url2', (req, res) => {
  res.send('Odpowiedź dla url2');
});

// Ćwiczenie B
app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.get('/form', (req, res) => {
  const formHTML = `
    <form action="/formdata" method="post">
      <label for="name">Imię:</label>
      <input type="text" id="name" name="name"><br><br>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br><br>
      
      <label for="message">Wiadomość:</label>
      <textarea id="message" name="message"></textarea><br><br>
      
      <input type="submit" value="Wyślij">
    </form>
  `;
  
  res.send(formHTML);
});

app.post('/formdata', (req, res) => {
  const { name, email, message } = req.body;
  
  const formDataHTML = `
    <h1>Dane z formularza:</h1>
    <p><strong>Imię:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Wiadomość:</strong> ${message}</p>
  `;
  
  res.send(formDataHTML);
});

// Start serwera na porcie 3000
app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
