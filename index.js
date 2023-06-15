import dotenv from 'dotenv';
dotenv.config();

const { PORT } = process.env;

import express from 'express';
import { body, validationResult } from 'express-validator';
import Model from './models/index.js';

const app = express();
const port = PORT;

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello Mahasiswa LP3I!');
});

app.get('/books', async (req, res) => {
  try {
    const books = await Model.Books.findAll();
    return res.json(books);
  } catch (error) {
    return res.json(error)
  }
});

app.get('/schools', async (req, res) => {
  try {
    const schools = await Model.Schools.findAll();
    return res.json(schools);
  } catch (error) {
    return res.json(error)
  }
});

app.get('/sellers', async (req, res) => {
  try {
    const sellers = await Model.Sellers.findAll();
    return res.json(sellers);
  } catch (error) {
    return res.json(error)
  }
});

app.get('/medicines', async (req, res) => {
  try {
    const medicines = await Model.Medicines.findAll();
    return res.json(medicines);
  } catch (error) {
    return res.json(error)
  }
});

app.get('/books/:id', async (req, res) => {
  try {
    const books = await Model.Books.findOne({
      where: {
        id: req.params.id
      }
    });
    return res.json(books);
  } catch (error) {
    return res.json(error)
  }
});

app.get('/schools/:id', async (req, res) => {
  try {
    const schools = await Model.Schools.findOne({
      where: {
        id: req.params.id
      }
    });
    return res.json(schools);
  } catch (error) {
    return res.json(error)
  }
});

app.get('/sellers/:id', async (req, res) => {
  try {
    const sellers = await Model.Sellers.findOne({
      where: {
        id: req.params.id
      }
    });
    return res.json(sellers);
  } catch (error) {
    return res.json(error)
  }
});

app.get('/medicines/:id', async (req, res) => {
  try {
    const medicines = await Model.Medicines.findOne({
      where: {
        id: req.params.id
      }
    });
    return res.json(medicines);
  } catch (error) {
    return res.json(error)
  }
});

app.post('/books', [
  body('judul', 'Judul tidak boleh kosong').notEmpty(),
  body('penulis', 'Penulis tidak boleh kosong').notEmpty(),
  body('penerbit', 'Penerbit tidak boleh kosong').notEmpty(),
  body('tahun_terbit', 'Penerbit tidak boleh kosong').notEmpty(),
  body('harga', 'Harga tidak boleh kosong').notEmpty().isInt(),
  body('stok', 'Stok tidak boleh kosong').notEmpty().isInt(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    await Model.Books.create(req.body);
    return res.json({ message: 'Buku berhasil ditambahkan!' });
  } catch (error) {
    return res.json(error)
  }
});

app.post('/schools', [
  body('nama_sekolah', 'Nama sekolah tidak boleh kosong').notEmpty(),
  body('kepala_sekolah', 'Kepala sekolah tidak boleh kosong').notEmpty(),
  body('akreditasi', 'Akreditasi tidak boleh kosong').notEmpty(),
  body('tahun_berdiri', 'Tahun berdiri tidak boleh kosong').notEmpty(),
  body('jumlah_siswa', 'Jumlah siswa tidak boleh kosong').notEmpty().isInt(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    await Model.Schools.create(req.body);
    return res.json({ message: 'Sekolah berhasil ditambahkan!' });
  } catch (error) {
    return res.json(error)
  }
});

app.post('/sellers', [
  body('nama_produk', 'Nama produk tidak boleh kosong').notEmpty(),
  body('nama_pedagang', 'Nama pedagang tidak boleh kosong').notEmpty(),
  body('lokasi', 'Nama lokasi tidak boleh kosong').notEmpty(),
  body('kontak', 'Kontak tidak boleh kosong').notEmpty(),
  body('jumlah_produk', 'Jumlah produk tidak boleh kosong').notEmpty().isInt(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    await Model.Sellers.create(req.body);
    return res.json({ message: 'Pedagang berhasil ditambahkan!' });
  } catch (error) {
    return res.json(error)
  }
});

app.post('/medicines', [
  body('nama_obat', 'Nama obat tidak boleh kosong').notEmpty(),
  body('jenis_obat', 'Jenis obat tidak boleh kosong').notEmpty(),
  body('produsen', 'Produsen tidak boleh kosong').notEmpty(),
  body('harga', 'Harga tidak boleh kosong').notEmpty(),
  body('stok', 'stok tidak boleh kosong').notEmpty().isInt(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    await Model.Medicines.create(req.body);
    return res.json({ message: 'Obat berhasil ditambahkan!' });
  } catch (error) {
    return res.json(error)
  }
});

app.patch('/books/:id', [
  body('judul', 'Judul tidak boleh kosong').notEmpty(),
  body('penulis', 'Penulis tidak boleh kosong').notEmpty(),
  body('penerbit', 'Penerbit tidak boleh kosong').notEmpty(),
  body('tahun_terbit', 'Penerbit tidak boleh kosong').notEmpty(),
  body('harga', 'Harga tidak boleh kosong').notEmpty().isInt(),
  body('stok', 'Stok tidak boleh kosong').notEmpty().isInt(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    await Model.Books.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.json({ message: 'Buku berhasil diubah!' });
  } catch (error) {
    return res.json(error)
  }
});

app.patch('/schools/:id', [
  body('nama_sekolah', 'Nama sekolah tidak boleh kosong').notEmpty(),
  body('kepala_sekolah', 'Kepala sekolah tidak boleh kosong').notEmpty(),
  body('akreditasi', 'Akreditasi tidak boleh kosong').notEmpty(),
  body('tahun_berdiri', 'Tahun berdiri tidak boleh kosong').notEmpty(),
  body('jumlah_siswa', 'Jumlah siswa tidak boleh kosong').notEmpty().isInt(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    await Model.Schools.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.json({ message: 'Sekolah berhasil diubah!' });
  } catch (error) {
    return res.json(error)
  }
});

app.patch('/sellers/:id', [
  body('nama_produk', 'Nama produk tidak boleh kosong').notEmpty(),
  body('nama_pedagang', 'Nama pedagang tidak boleh kosong').notEmpty(),
  body('lokasi', 'Nama lokasi tidak boleh kosong').notEmpty(),
  body('kontak', 'Kontak tidak boleh kosong').notEmpty(),
  body('jumlah_produk', 'Jumlah produk tidak boleh kosong').notEmpty().isInt(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    await Model.Sellers.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.json({ message: 'Pedagang berhasil diubah!' });
  } catch (error) {
    return res.json(error)
  }
});

app.patch('/medicines/:id', [
  body('nama_obat', 'Nama obat tidak boleh kosong').notEmpty(),
  body('jenis_obat', 'Jenis obat tidak boleh kosong').notEmpty(),
  body('produsen', 'Produsen tidak boleh kosong').notEmpty(),
  body('harga', 'Harga tidak boleh kosong').notEmpty(),
  body('stok', 'stok tidak boleh kosong').notEmpty().isInt(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    await Model.Medicines.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.json({ message: 'Obat berhasil diubah!' });
  } catch (error) {
    return res.json(error)
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    await Model.Books.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.json({ message: 'Buku berhasil dihapus!' });
  } catch (error) {
    return res.json(error)
  }
});

app.delete('/schools/:id', async (req, res) => {
  try {
    await Model.Schools.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.json({ message: 'Sekolah berhasil dihapus!' });
  } catch (error) {
    return res.json(error)
  }
});

app.delete('/sellers/:id', async (req, res) => {
  try {
    await Model.Sellers.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.json({ message: 'Pedagang berhasil dihapus!' });
  } catch (error) {
    return res.json(error)
  }
});

app.delete('/medicines/:id', async (req, res) => {
  try {
    await Model.Medicines.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.json({ message: 'Obat berhasil dihapus!' });
  } catch (error) {
    return res.json(error)
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})