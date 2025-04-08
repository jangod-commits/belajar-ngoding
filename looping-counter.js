// // ===Counter Pada Looping=== //

// let i = 0; // i = adalah counternya

// while (i < 100) {
//     console.log(i)
//     i += 5; // disini counternya ditentukan besarnya berapa 
// }

// // == Menggabungkan Looping dengan Conditional Statement=== //
// let i = 0;
// // disini kita belajar menggabungkan dengan if else
// while (i <= 50) {
//     // disini kita akan mencari ganjil atau genap
//     if (i % 2 === 0) {
//         console.log(`${i} adalah genap`)
//     } else {
//         console.log(`${i} adalh ganjil`)
//     }
//     i++
// }

// // simpelnya modulus operator adalah sisa bagi
// // misal 3 / 2 hasilnya koma, dan kalau 3 % 2 hasilnya akan 1
// // maka bisa di bilang apapun angkanya kalau di modulus itu angkanya juga dan hasilnya adalah 0
// // maka itu adalah kelipatannya
// // contoh = n % 3 ==== 0 // maka ini adalah kelipatan 3
// // contoh = n % 5 ==== 0 // maka ini adalah kelipatan 5
// // contoh = n % 2 ==== 0 // maka ini adalah kelipatan 2, dan 2  kebetulan bisa menentukan ganjil/genap

// ========FIZZBUZZ========== //
// Problem Fizzbuzz
// Jika i adalah kelipatan 3 maka tampilkan fizz
// Jika i adalah kelipatan 5 maka tampilkan buzz
// Jika i adalah kelipatan 3 dan 5 maka tampilkan fizzbuzz
// jika bukan kelipatan diatas maka tampilkan angka
for (let i = 0; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz")
    } else if (i % 3 === 0 && i % 5 !== 0) { // !== dibaca bukan sama dengan
        console.log("fizz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else {
        console.log(i)
    }
}
// disini harus sering coba buat ubah2 konditional statementnya
// demi pemahaman lebih lanjut

// pada looping ada namanya break atau continue;
// BREAK membuat loop berhenti sepenuhnya;
// CONTINUE membuat loop skip di iterasi tertentu;

// contoh break 
for (let i = 0; i < 10; i++) {
    if (i === 7) {
        console.log(i + " saatnya berhenti")
        break; //break disini
    }
    console.log(i)
}

// contoh continue
for (let i = 0; i < 10; i++) {
    if (i === 7) {
        continue; // continue disini
    }
    console.log(i)
}

// penulisan code tetap dari atas ke bawah