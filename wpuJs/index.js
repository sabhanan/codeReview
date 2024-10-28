
//Object literal
//PROBLEM : TIDAK EFEKTIF UNTUK OBJECT YANG BANYAK
// let siswa = {
//     nama: 'sandi',
//     energy: 10,
//     makan: function(porsi){
//         this.energy = this.energy+porsi;
//         console.log('selamat makan ${this:nama},  selamat makan!');
//     }
// }
// let siswa1 = {
//     nama: 'demy',
//     energy: 20,
//     makan: function(porsi){
//         this.energy = this.energy+porsi;
//         console.log('selamat makan ${this.nama},  selamat makan!');
//     }
// }
        
//function declaration
//
// function Siswa(nama, energi){
//     let siswa = {};
//     siswa.nama = nama;
//     siswa.energi = energi;

//     siswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log('hello ${this.nama}, selamat makan');
//     }
//     siswa.main = function(jam){
//         this.energi -= jam;
//         console.log('halo ${this.name}, selamat bermain');
//     }
//     return siswa;
// }
// let dika = Siswa('dika', 10);
// let sandi = Siswa('sandi', 15);

//constructor function
// function Siswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log('hello ${this.nama}, selamat makan');
//     }
//     this.main = function(jam){
//         this.energi -= jam;
//         console.log('halo ${this.name}, selamat bermain');
//     }
// }
// let sandi  = new Siswa('sandi', 10);


//
const Siswa = {
    makan: function(porsi){
        this.energi += porsi;
        console.log('hello ${this.nama}, selamat makan');
    },
    main: function(jam){
        this.energi -= jam;
        console.log('halo ${this.name}, selamat bermain');
    },
    tidur: function(jam){
        this.energi += jam + 2;
        console.log('halo ${this.name}, selamat tidur');
    }
};

function Siswa(nama, energi){
    let siswa = Object.create(methodSiswa);
    siswa.nama = nama;
    siswa.energi = energi;

    return siswa;
}
let dika = Siswa('dika', 10);
let sandi = Siswa('sandi', 20);