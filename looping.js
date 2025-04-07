// // while ()
// // for ()

// // // ======== CONTOH LOOPING PERTAMBAHAN (ke kanan) ==========//
// let i = 0;

// while (i < 5) {
//     console.log(i);
//     i++
// }
// HASILINYA, (1,2,3,4)

// // ======== CONTOH LOOPING PENGURANGAN (ke kiri) ==========//
// let i = 5;

// while (i >= 0) {
//     console.log(i);
//     i--
// }
// // // HASILINYA, (5,4,3,2,1,0)

// // while itu : gimana caranya dari true ke false
// // kondisi tujuan mengetahui true or false
// // dalam looping ada yang namanya arah (KIRI atau KANAN), 
// // Kiri itu pengurangan dan Kanan itu pertambahan
// // kanan itu PLUS (+), dan kiri itu MINUS (-)
// // hati-hati terhadap infinite loop, atau loopnya ga jalan

// // =======FOR LOOP=======//
// // bisa langsung sekaligus dalam satu ekspresi

// // ==Pengurangan==//
// for (let i = 0; i < 5; i--) {
//     console.log(i)
// }

// //==penambahan==//
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// //==pengurnagan==//
// for (let i = 0; i >= -5; i--) {
//     console.log(i);
// }
// // // HASILNYA (0,-1,-2,-3,-4,-5)

// // ===CONTOH KASUS==//
// let name = "febrian";

// // ada namanya method length untuk tipe data string dan array
// // method length itu mengembalikan nilai angka total huruf yang ada pada string,
// //  atau total elemen yang ada pada array

// for (let i = 0 ; i < name.length; i++) {
//     console.log (name [i])
// }
// // HASILNYA (f,e,b,r,i,a,n)

// // jadi, pada tipe data string atau array di javascript, ada yang namanya indexing
// // dimana index itu SUDAH PASTI BERAWALAN dari 0;

// // console.log(name [0] + name [3])

// // MISAL: diberikan kasus untuk membalikkan suatau kata, tanpa menggunakan method reverse
// let name = "agus"; // length kan 4, sedangakan index itu dari 0, jadi untuk kata "agus", 0 = a, 1 = g, 2 = u, 3 = s.
// let result = " "; // variabel baru untuk hasil
 
// for (let i = name.length -1; i >= 0; i--) { //i = 4-1; 4-1 >= 0; i--. di kurangin satu karna ingin mengakses yang paling ujung
//     result += name[i]; //s => su => sug => suga
// }
// console.log(result)

// // looping pasti mainannya dengan index, untuk segala kalkulasi atau penambahan sesuatu
// // HASILNYA : "suga"


// // ===NESTED LOOP===//
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= i; j++) {
//         console.log(j)
//     }
//     console.log('')
// }
// console.log('selesai')

//kesimpulan
// looping sering bertemu dengan method length
// looping itu agar membuat code jadi lebih pendek
// looping itu agar membuat suatu proses menjadi dinamis