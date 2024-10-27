import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Dapatkan __dirname menggunakan import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname)));

function home(req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, 'index.html'));
}

function about(req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, 'about.html'));
}

function portfolio(req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, 'portfolio.html'));
}

function contact(req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, 'contact.html'));
}

function wedding(req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, 'wedding.html'));
}

function birthday(req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, 'birthday.html'));
}

function event(req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, 'event.html'));
}

function notFound(req, res) {
  res.status(404);
  res.sendFile(path.join(__dirname, 'nf.html'));
}

// Rute yang valid
app.get('/', home);
app.get('/about', about);
app.get('/portfolio', portfolio);
app.get('/contact', contact);
app.get('/wedding', wedding);
app.get('/birthday', birthday);
app.get('/event', event);

// Middleware untuk menangani rute yang tidak ditemukan
app.use(notFound);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
