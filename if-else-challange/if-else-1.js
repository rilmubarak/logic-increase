// -------- Hour -------
// Jika jam diantara 6 pagi dan 12 siang : Good Morning!
// Jika jam diantara 12 siang dan 6 sore : Good Afternoon!
// Jika tidak: Good Evening


let jam = 14

if (jam >= 6 && jam < 12){
    console.log("Selamat Pagi");
} else if (jam >= 12 && jam < 18){
    console.log("Selamat Sore");
} else {
    console.log('selamat malam');
}