let nama = "ian";
let umur = 24; // tanpa tanda kutip
let apakahBenar = true; // tanpa tanda kutip
let uang = 5000.5;
let data = [1, 2, 3];
let obj = {nama: "ian", umur : 24};
let kosong;

console.log(typeof nama); //string
console.log(typeof umur);        // number
console.log(typeof apakahBenar); // boolean
console.log(typeof uang); //number
console.log(typeof data); //object (yes, array itu objet)
console.log(typeof obj); //object
console.log(typeof kosong); //undefined

console.log(Array.isArray(data)); // true

// Semua yang ditulis dengan tanda " " dianggap string di JavaScript.
// Array.isArray(data) dipakai buat ngecek apakah data itu array atau bukan.

//  📦 Apa itu array?
// Array itu kayak kotak penyimpanan berderet buat nyimpen banyak nilai sekaligus dalam satu variabel.
// Bayangin kayak rak sepatu, tapi isinya bisa angka, teks, bahkan campuran.