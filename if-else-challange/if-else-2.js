// Hints
// Variabel tetap di-input secara manual.
// Variabel namadan perandapat diisi apa saja.
// Nama tidak perlu dicek sama persis seperti contoh input/output
// Buat If-Elseberbeda masing-masing untuk mengecek peran

let nama = ''
let peran = 'Penyihir'
let peranLengkap = ['Penyihir', 'Ksatria', 'Tabib']

if (nama === '' && peran === ''){
    console.log("Nama dan Peran harus diisi");
} else if (nama && peran === ''){
    console.log(`Hai ${nama}, Peran harus diisi`);
} else if (nama && peran === 'Ksatria'){
    console.log(`Selamat datang didunia proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjata mu!`);
} else if (nama && peran === 'Tabib'){
    console.log(`Selamat datang didunia Proxitia, ${nama}`);
    console.log(`Halo ${peran} ${nama}, kamu akan membantu teman mu yang terluka`);
} else if (nama && peran === 'Penyihir'){
    console.log(`Selamat datang didunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenangan mu!`);
} else if (nama && peran !== peranLengkap){
    console.log(`Hai ${nama} pilihlah peran yang sesuai, seperti: Penyihir, Tabib, dan Ksatria`);
} else if (nama === '' && peran !== peranLengkap){
    console.log(`Hai ${peran}, siapa nama mu? tolong diisi terlebih dahulu :)`);
} else {
    "Pilihannya kurang sesuai :("
}

//---------------- Pseudocodenya ---
 
/*
STORE "nama" with any value (STRING)
STORE "peran" with any value (STRING)

IF value "nama" empty && value "peran" empty
    DISPLAY "Nama dan Peran harus diisi"
ELSE IF nama && peran ===
*/