function getAnimals (hewan){
    let binatang = ['Ayam', 'Burung', 'Beruang', 'Harimau', 'Singa']
    let index = hewan.length % binatang.length

    return binatang[index]
}

console.log(getAnimals('Ayam'));

let a = 4 % 5

console.log(a);