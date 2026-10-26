# Portfolio Personal

Portfolio satu halaman berbasis React + Vite. Semua konten yang mudah diperbarui berada di `src/data/content.js`.

## Menjalankan

```bash
npm install
npm run dev
```

Untuk build produksi:

```bash
npm run build
npm run preview
```

## Mengganti foto

Masukkan foto asli ke folder berikut:

- `public/image/profile/hero.jpg` untuk foto utama di Beranda.
- `public/image/projects/` untuk sampul project.
- `public/image/gallery/` untuk galeri personal.
- `public/image/certificates/` untuk dokumen pendukung pengalaman.

Setelah file ditambahkan, isi path relatifnya di `src/data/content.js`, misalnya `/image/projects/project-saya.jpg`. Bila path kosong atau file gagal dimuat, website menampilkan placeholder bertanda `Media sementara`.

## Menambah project

Tambahkan satu object baru ke array `projects` di `src/data/content.js`. Isi `id`, `number`, `title`, `category`, `description`, `image`, `accent`, dan detail `tujuan`, `peran`, `tools`, `proses`, `hasil`, serta `link`. Kategori baru perlu ditambahkan ke array `categories` agar muncul sebagai filter.

## Data lain

- Identitas dan bio: `profile`
- Tautan sosial: `socialLinks`
- Galeri: `gallery`
- Keahlian: `skills`
- Pengalaman: `experiences`

## Deployment gratis

Build dengan `npm run build`, lalu deploy folder `dist` ke Netlify, Vercel, atau GitHub Pages. Untuk workflow otomatis, hubungkan repository GitHub ke salah satu layanan tersebut.
