// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript


function go(x){
    let arr = []

    for( let i = 0; i < x.length; i++){

        let current = x[i]
        let previous = x[(i-1)]

      

        current == previous ? console.log('didnt push') : arr.push(current)

       
    }

    return arr
}


console.log(go('AAAABBBCCDAABBB'))
console.log(go('ABBCcAD'))