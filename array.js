//=== A R R A Y ==== //

let array = [1, 2, 3, 4, 5, 6]; // array biasa (1 dimensi), isinya angka
console.log(array); // output: [1, 2, 3, 4, 5, 6]

// array bisa menampung banyak tipe data sekaligus
 //inget typeof itu keyword di JavaScript buat ngecek tipe data dari suatu nilai.
let array2 = [1, "abc", [1,2,3], {nama: "test"}, null, false];
console.log(typeof array2); // output: campuran tipe data

// === Array itu ada 2 jenis: === //
// 1. Array 1 dimensi
// 2. Array 2 dimens

let dimensi1 = [1,2,3,4,5,6]; //array 1 dimensi = deretan angka biasa
let dimensi2 = [[1,2,3], [4,5,6]] // array 2 dimensi = array di dalam array

// CARA MENGAKSES ARRAY
// INGAT akses pakai index, mulai dari 0 (bukan 1)

console.log(dimensi1[2])     //hasilnya 3
console.log(dimensi1[4])     //hasilnya 5

console.log(dimensi2[0])    // hasil: [1, 2, 3] ➜ baris pertama
console.log(dimensi2[1])    // hasil: [4, 5, 6] ➜ baris kedua
console.log(dimensi2[2])    //hasilnya undefined

console.log(dimensi2[0][0]) // hasil: 1 ➜ baris 0, kolom 0
console.log(dimensi2[1][2]) // hasil: 6 ➜ baris 1, kolom 2

// CARA UNTUK LOOPING PADA ARRAY 2 DIMENSI, contoh kode dari RPN
console.log('looping dimensi2 dibawah ini')
for (let i = 0; i < dimensi2.length; i++) {
    for (let j = 0; j < dimensi2[i].length; j++){
        console.log(dimensi2[i][j])
    }
}

// CODE GPT
for (let i = 0; i < dimensi2.length; i++) { 
    // loop pertama: buat ngeluarin tiap baris
    // i dimulai dari 0
    // < berarti: selama i masih KURANG DARI jumlah baris (dimensi2.length), loop jalan terus
    // dimensi2.length = 2, jadi i cuma sampai 1 (0 dan 1), gak nyentuh 2
    // kalau pakai <= nanti bisa error karena index ke-2 gak ada

    // i = 0 ➜ [1, 2, 3]
    // i = 1 ➜ [4, 5, 6]

    for (let j = 0; j < dimensi2[i].length; j++) { 
        // loop kedua: ngeluarin elemen di dalam baris (kolom)
        // < di sini juga berarti: selama j KURANG DARI jumlah elemen di baris ke-i
        // contoh dimensi2[0].length = 3, maka j = 0,1,2
        // j = 0 ➜ elemen pertama di baris ke-i
        // j = 1 ➜ elemen kedua di baris ke-i
        // j = 2 ➜ elemen ketiga di baris ke-i

        console.log(dimensi2[i][j]); // cetak elemen dari array 2 dimensi
    }
}

// === ARRAY 2 DIMENSI SERING DIPAKAI UNTUK DATA TABEL === //
/*
[
    // i = untuk mengakses baris
    // j = untuk mengakses kolom
*/

let orang = [
    ["febrian", "indonesia", "24 tahun"],
    ["john", "inggris", "25 tahun"]
];
console.log('biodata orang')
for (let i = 0; i < orang.length; i++) { // loop baris
    for (let j = 0; j < orang[i].length; j++) { // loop kolom
        if (j === 0) {
            console.log(`nama: ${orang[i][j]}`); // ambil nama
        } else if (j === 1) {
            console.log(`asal: ${orang[i][j]}`); // ambil negara
        } else {
            console.log(`umur: ${orang[i][j]}`); // ambil umur
        }
    }
    console.log(''); // biar ada jarak antar orang
}

// === KAPAN PAKAI ` (backtick) dan ${} ? === //
// Backtick (` `) dipakai untuk bikin template string ➜ string yang bisa masukin variabel
// Pakai ${} buat nampilin nilai variabel atau ekspresi di dalam string

let nama = "kurama";
console.log(`Halo ${nama}`); // output: Halo kurama

// Tanpa backtick, harus sambung string manual:
console.log("Halo " + nama); // hasil sama, tapi lebih ribet