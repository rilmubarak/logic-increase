function strip(stp){
    let str = '';

    for (let i = 0; i < stp.length; i++){
        str += stp[i]

        if (i < stp.length-1){
            str += '-'
        }
    }
    return str
}

console.log(strip("helloworld")); //h-e-l-l-o-w-o-r-l-d
// console.log(strip(‘khairil’));
// console.log(strip(‘hacktiv8’));
// console.log(strip(‘prime’));
// console.log(strip(‘javascript’));