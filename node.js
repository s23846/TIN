const http = require('http');

// Funkcje zwracające różne stringi
function home() {
  return 'Witaj na stronie głównej!';
}

function about() {
  return 'O nas';
}

function contact() {
  return 'Skontaktuj się z nami';
}

// Tworzenie serwera HTTP
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(home());
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(about());
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(contact());
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Nie znaleziono strony');
  }
});

// Uruchomienie serwera na porcie 3000
server.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
