// cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c';

// variabel bisa menampung tipe data string (text), integer/number, boolean, array, dan object

let nama = "ianjangod"; //string
let umur = "24"; //number
let apakahBenar = true; //boolean
let uang = 5000.5 //number namun ada koma

// operator algoritmatika

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, 'pertambahan')
console.log(angka1 - angka2, 'pengurangan')
console.log(angka1 / angka2, 'pembagian')
console.log(angka1 * angka2, 'perkalian')
console.log(angka1 % angka2, 'modulus')

// disini kita belajar mengisi variabel
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasislOperatorAritmatika); // 30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasislOperatorAritmatika); // -10

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasislOperatorAritmatika); // ntah berapa :)

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasislOperatorAritmatika); // 200

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasislOperatorAritmatika); // 10


// string juga bisa ditambah namun string ga bisa dikurang dengan operator aritmatika
let firstname = 'agus';
let lastname = 'santoso';
let fullname = firstname + ' ' + lastname;
console.log(fullname)
console.log(firstname + ' ' + lastname)
console.log(firstname - lastname) //NaN

// alur pembacaam code
// untuk membaca code, kalian harus membacanya dari kiri ke kanan , dan atas kebawah
// contohhhh

let number = 20;
console.log (number + 10); //30
number = 10
console.log(number + 10) //20
number = false;
console.log(number + 10) // 10

// pertanyaan??? kenapa false - 10 tetap menjadi 10? KARENA false = 0, dan true = 1
console.log(true + 10); //11

// membaca error
// error itu jangan kalian takut, justru harus takut kalau ga ada error dalam pemrograman.
// karena dalam pekerjaan jika suatu fitur berjalan namun ada bug tapi tidak error, itu bikin si programmer rada muaaaak
// buat nyari errornya atau letak kesalahannya dimana !!

// contoh error
// const hewan = 'jerapah';
// console.log(hewan)
// hewan = 'buaya'

// auto komen dengan ctrl + /

// tipsnya adalah selalu teliti, dan kalau ada error dibaca aja, dan belajar ngoding itu perlu KEBIASAAAN
// karena NGODING ADALAH HABIT


