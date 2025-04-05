// kode ini merupakan hasil revisi dan ringkasan dari chat gpt

// ============================================
// 🚀 PENGENALAN VARIABEL DAN TIPE DATA
// ============================================

// cara membuat variabel
var a = 'a';     // bisa diubah, dan bisa diakses ulang walaupun beda blok (tidak disarankan di era modern)
let b = 'b';     // bisa diubah, tapi hanya berlaku di bloknya
const c = 'c';   // TIDAK bisa diubah (konstan)

// variabel bisa menampung berbagai tipe data:
let nama = "ianjangod";      // string (text)
let umur = 24;               // number (angka)
let apakahBenar = true;      // boolean (true/false)
let uang = 5000.5;           // number dengan koma (floating point)

// ============================================
// ➕ OPERATOR ARITMATIKA (MATEMATIKA)
// ============================================

let angka1 = 10;
let angka2 = 20;

// kita bisa melakukan:
console.log(angka1 + angka2, '→ pertambahan');    // 30
console.log(angka1 - angka2, '→ pengurangan');    // -10
console.log(angka1 / angka2, '→ pembagian');      // 0.5
console.log(angka1 * angka2, '→ perkalian');      // 200
console.log(angka1 % angka2, '→ modulus (sisa bagi)'); // 10

// kita juga bisa "menyimpan" hasil operasi ke variabel
let hasil = angka1 + angka2;
console.log(hasil);  // 30

hasil = angka1 - angka2;
console.log(hasil);  // -10

hasil = angka1 / angka2;
console.log(hasil);  // 0.5

hasil = angka1 * angka2;
console.log(hasil);  // 200

hasil = angka1 % angka2;
console.log(hasil);  // 10

// ============================================
// 🧵 MENGGABUNGKAN STRING (TEXT)
// ============================================

let firstname = 'Agus';
let lastname = 'Santoso';

let fullname = firstname + ' ' + lastname;
console.log(fullname);                    // Agus Santoso
console.log(firstname + ' ' + lastname);  // Agus Santoso

// kalau string dikurangin? hasilnya NaN (Not a Number)
console.log(firstname - lastname);        // NaN

// ============================================
// 🧭 ALUR BACA PROGRAM
// ============================================

// Ingat: code dibaca dari ATAS KE BAWAH, dan dari KIRI KE KANAN

let number = 20;
console.log(number + 10);  // 30

number = 10;
console.log(number + 10);  // 20

number = false;            // false akan dianggap 0
console.log(number + 10);  // 10

// Kenapa bisa gitu?
// Di JavaScript:
//   true = 1
//   false = 0
console.log(true + 10);    // 11

// ============================================
// ❗ MEMBACA ERROR
// ============================================

// Error itu teman, bukan musuh!
// Kalau ada error, itu tandanya ada yang salah dan perlu diperbaiki
// Tapi kalau ga ada error, belum tentu kode kamu benar sepenuhnya 😅

// CONTOH ERROR:
// const hewan = 'jerapah';
// console.log(hewan);
// hewan = 'buaya'; // ❌ ERROR! karena hewan pakai const (tidak bisa diubah)

// Kalau mau komentari banyak baris sekaligus:
// - Gunakan shortcut: CTRL + / (Windows) atau CMD + / (Mac)

// ============================================
// 🧠 TIPS PENTING BUAT PEMULA:
// ============================================

// ✅ Jangan takut error, justru pelajari error-nya
// ✅ Biasakan untuk membaca dan teliti baris per baris
// ✅ Baca dokumentasi dan contoh di internet
// ✅ Ngoding itu skill yang harus DILATIH
// ✅ NGODING ADALAH HABIT — bukan cuma teori!
//    Makin sering latihan, makin jago kamu nanti 💪
