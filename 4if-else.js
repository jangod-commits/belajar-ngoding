// let nilai = 13; //ganti nilai di let untuk mencoba if dan else nya

// /// console.log(nilai >= 50 ) //tergantung nilainya, hasilnya true atau false. jika nilainya lebih dari 50 dia mengikut if (true), jika kurang mengikut else (false)

// if (nilai >= 50 ) { // nilainya true or false
//     console.log("lulus")
// } else if (nilai >= 40) {
//     console.log ("tidak lulus, namun masih mending")
// } else {
//     /// (nilai < 50 ) //: tanpa ini juga bisa, dan lebih disarankan agar lebih rapi
//     console.log("twah parah sih")
// }

// slow but sure : "pelan-pelan"
// else : seperti pengecualian untuk if yang ada diatasnya
// yang tanda "/" nya lebih dari dua "//" artinya memang notes 
// hanya variabel yang menggunakan sama dengan setelah perintahnya (let,var dan const)

// ============OPERATOR LOGIKA============= //

let nilai = 80;

/// console.log(nilai >= 50 ) //tergantung nilainya, hasilnya true atau false. jika nilainya lebih dari 50 dia mengikut if (true), jika kurang mengikut else (false)

// mengconvert nilai yg awalnya angka menjadi huruf

if (nilai >= 80 && nilai <= 100){
    nilai = "A"
} else if (nilai >= 70 && nilai < 80) {
    nilai = "B"
} else if (nilai >= 60 && nilai <70) {
    nilai = "C"
} else {
    nilai = "D"
}

console.log(nilai)
nilai = 100

// and (&&) : semua kondisi harus terpenuhi, lalu dia akan menghasilkan nilai true
// or (||) : salah satu kondisi harus terpenuhi, lalu dia akan menghasilkan nilai true
// not (!) : salah satu kondisi harus terpenuhi, lalu dia akan menghasilkan nilai true

let banding = nilai >= 80 && nilai <= 100; //antara true or false, jika true nilai harus diantara 80-100 jika false maka diluar itu
console.log (banding, '&&')
let banding2 = nilai >= 80 || nilai <= 100; //antara true or false,
console.log (banding2, '||')
let banding3 = nilai != 50
console.log(banding3, '!')

// ==========COMPARISON EQUATOR==================//

// apa bedanya == (loose equality) dan === (strict equality) ???
let x = 50; // tipe data number
let y = "50"; // tipe data string

let banding4 = x == y;
console.log(banding4, '4');
let banding5 = x === y;
console.log(banding5, '5')

// == hasilnya true karena tidak membandingkan tipe data, hanya nilai saja, dan JavaScript akan secara otomatis mengkonversi "50" (string) menjadi 50 (number)
// === hasilnya false karena membandingkan tipe data dan nilai sekaligus
// yang mana x = number, dan y = string.
// dan jika ingin membuat nilai di banding5 menjadi true adalah menyamakan keduanya, menjadi x dan y nilainya sama-sama string atau sama-sama number.
// biaskan pakai === (strict equality) agar lebih aman dan terhindar dari bug aneh.

// ========src : ChatGPT================== //

// if else ini juga bisa dibikin bersarang lohh!!!
// bersarang artinya :  "ada if di dalam if"
// LOGIKANYA : kalau A benar, coba cek lagi B

let number = 6; // kamu bisa ganti angka ini untuk coba-coba

if (number > 5) {
    // jika angka lebih besar dari 5
    if (number % 2 === 0) {
        console.log("lebih besar dari 5 dan genap")
    } else {
        console.log("lebih besar dari 5 dan ganjil")
    }
} else {
    // jika angka lebih kecil atau sama dengan 5
    if (number % 2 === 0) {
        console.log("lebih kecil atau sama dengan 5 dan genap")
    } else {
        console.log("lebih kecil atau sama dengan 5 dan ganjil")
    }
}

/*
% (modulus) : seperti sisa bagi
contoh:
    6 % 2 = 0 → artinya 6 habis dibagi 2 → maka GENAP
    7 % 2 = 1 → sisa 1 → maka GANJIL

=== artinya pembanding nilai dan tipe data juga
contoh:
    0 === 0 → true
    0 === "0" → false (karena beda tipe)
*/

/* 🔎 CONTOH EKSEKUSI:
Jika number = 6
- 6 > 5 → true
- 6 % 2 === 0 → true
>> Output: "lebih besar dari 5 dan genap"

Jika number = 3
- 3 > 5 → false
- 3 % 2 === 0 → false
>> Output: "lebih kecil atau sama dengan 5 dan ganjil"
*/

/* 📌 RINGKASAN LOGIKA:
1. Cek apakah number lebih besar dari 5
    - Jika YA → cek apakah genap atau ganjil
    - Jika TIDAK → tetap cek apakah genap atau ganjil

2. Gunakan modulus (%) untuk menentukan genap/ganjil
    - number % 2 === 0 → GENAP
    - number % 2 !== 0 → GANJIL
*/