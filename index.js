import express from "express";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// Dapatkan __dirname menggunakan import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
app.use(bodyParser.json());
let token;

app.use(
  session({
    secret: "$_kamu_tolol$$$", // Ganti dengan kunci rahasia untuk mengamankan sesi
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, // Sesi berlaku selama 1 hari
  })
);

app.use(express.static(path.join(__dirname)));

// Fungsi untuk halaman utama
function home(req, res) {
  console.log("Cookies:", req.cookies); // Log untuk melihat cookies
  res.status(200);
  // Cek apakah cookie "visited" sudah ada
  if (req.cookies.visited) {
    // Jika sudah ada cookie, kirim file HTML
    res.sendFile(path.join(__dirname, "index.html"));
  } else {
    // Jika belum ada cookie, buat cookie dan tampilkan pesan selamat datang
    res.session("visited", "true"); // Sederhanakan pengaturan cookie
    // Cookie berlaku selama 1 hari
    res.send(
      '<h1>Welcome to our site!</h1><p>You have not visited before. <a href="/">Click here to continue to the main page.</a></p>'
    );
  }
  token = "$_jasa_$_desain_$_album_$_wedding_$$_#1234";
  console.log(token);
}

// Fungsi untuk rute lainnya
function about(req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, "about.html"));
}

function portfolio(req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, "portfolio.html"));
}

function contact(req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, "contact.html"));
}

function wedding(req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, "wedding.html"));
}

function birthday(req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, "birthday.html"));
}

function event(req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, "event.html"));
}

// Middleware untuk menangani rute yang tidak ditemukan
function notFound(req, res) {
  res.status(404).sendFile(path.join(__dirname, "nf.html"));
}

function auth(req, res, next) {
  const authHeader = req.headers["$_jasa_$_desain_$_album_$_wedding_$$1234"];
  if (authHeader === `Bearer ${token}`) {
    console.log(token);
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}

// Rute yang valid
app.get("/", home);
app.get("/about", about);
app.get("/portfolio", portfolio);
app.get("/contact", contact);
app.get("/portfolio/wedding", wedding);
app.get("/portfolio/birthday", birthday);
app.get("/portfolio/event", event);

// Middleware untuk rute yang tidak ditemukan
app.use(notFound);

// Menjalankan server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
