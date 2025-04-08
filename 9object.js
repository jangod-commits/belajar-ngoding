// =====================
// 🔹 MEMBUAT OBJECT
// =====================
const myObj = {
    nama: "febrian",
    kelas: "7-2",
    hobby: ['main', 'makan', 'tidur'], // Array di dalam object
    detail: {
        tinggi: 174,
        berat: 65
    }
};

// =====================
// 🔹 AKSES NILAI DALAM OBJECT
// =====================
console.log(myObj);          // Output seluruh object
// hasil: { nama: 'febrian', kelas: '7-2', hobby: [...], detail: {...} }

console.log(myObj.nama);     // Output: febrian
console.log(myObj.kelas);    // Output: 7-2
console.log(myObj.hobby[1]); // Output: makan (akses array index ke-1)
console.log(myObj.detail.tinggi); // Output: 174 (akses object di dalam object)

// =====================
// 🔹 SIMPAN OBJECT DI VARIABEL LAIN
// =====================
const detail = myObj.detail; // Menyimpan bagian 'detail' untuk akses lebih mudah nanti
console.log(detail.berat);   // Output: 65

console.log(''); // Pemisah biar output di console rapi

// =====================
// 🔹 CARA LAIN AKSES NILAI: BRACKET NOTATION
// =====================
console.log(myObj['nama']); // Output: febrian (akses properti dengan string)

// =====================
// 🔹 DYNAMIC OBJECT - MEMBUAT OBJECT DARI LOOP
// =====================
let objAngka = {};

for (let i = 1; i <= 3; i++) {
    objAngka[i] = i; // Menambahkan properti secara dinamis
}
console.log(objAngka); // Output: { '1': 1, '2': 2, '3': 3 }

// =====================
// 🔹 LOOPING ISI OBJECT (PAKAI NILAI)
// =====================
for (let i = 1; i <= 3; i++) {
    console.log(objAngka[i]); // Output: 1, 2, 3
}

// =====================
// 🔹 LOOPING DENGAN FOR...IN
// =====================
// Cara khusus untuk nge-loop object (key-value)
console.log('');
for (const key in myObj) {
    console.log(`${key}: ${myObj[key]}`);
    // Output: nama: febrian, kelas: 7-2, hobby: [...], detail: {...}
}
