let paramex = {
    nama: 'Paramex',
    kegunaan: 'Sakit kepala',
    price: 7500
  };
  let panadol = {
    nama: 'Panadol',
    kegunaan: 'Sakit kepala',
    price: 5000
  };
  let bintangin = {
    nama: 'Bintangin',
    kegunaan: 'Masuk angin',
    price: 10000
  };
  let tolakAngin = {
    nama: 'Tolak Angin',
    kegunaan: 'Masuk angin',
    price: 15000
  };
  let koyoCabe = {
    nama: 'Koyo Cabe',
    kegunaan: 'Pegal-pegal',
    price: 20000
  };
  let balpirik = {
    nama: 'Balpirik',
    kegunaan: 'Pegal-pegal',
    price: 18000
  };
  let obatObatan = [koyoCabe, paramex, tolakAngin, balpirik, bintangin, panadol];
  // Urutkan objects yang ada dalam obatObatan, pertama berdasarkan kegunaannya, kedua berdasarkan harganya.
  // Hasil sorting yang diharapkan adalah:
  // bintangin  , tolakAngin , panadol     , paramex     , balpirik   , koyoCabe
  // Masuk angin, Masuk Angin, Sakit Kepala, Sakit Kepala, Pegal-pegal, Pegal-pegal
  // 10000      , 15000      , 5000        , 7500        , 18000      , 20000