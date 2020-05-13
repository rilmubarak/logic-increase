// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
// Disini kamu diminta untuk membuat format tanggal. 
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, 
// output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// var hari = 21; var bulan = 1; var tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

let tanggal = 2
let bulan = 12
let tahun = 2020

switch (bulan){
    case 1:
        bulan = 'Januari'
        break;
    case 2:
        bulan = 'Februari'
        break;
    case 3:
        bulan = 'Maret'
        break;
    case 4:
        bulan = 'April'
        break;
    case 5:
        bulan = 'Mei'
        break;
    case 6:
        bulan = 'Juni'
        break;
    case 7:
        bulan = 'July'
        break;
    case 8:
        bulan = 'Agustus'
        break;
    case 9:
        bulan = 'September'
        break;
    case 10:
        bulan = 'Oktober'
        break;
    case 11:
        bulan = 'November'
        break;
    case 12:
        bulan = 'Desember'
        break;
}

let calendar = tanggal + ' ' + bulan + ' ' + tahun

if (tanggal > 31 || tanggal < 1){
    console.log('Mohon input tanggal yang benar');
} else if (bulan > 12 || bulan < 1){
    console.log('Mohon input bulan yang benar');
} else if (tahun > 2200 || tahun < 1900){
    console.log('Mohon input tahun yang benar');
} else {
    console.log(calendar);
}