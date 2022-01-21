

function countdown(num, total = 0){
    console.log({num, total})
    if(num <= 0 ){ 
        return total }


    return countdown(num - 1, total + num)
    
}

// console.log(countdown(4))


function go( arr ){

    if(arr.length <= 0){return }
    console.log(arr)
    const [ head, ...rest ] = arr
    return go(rest)
}

// go(['a','b', 1, 2, {pearson: 'dominates'}])


function handshakes(arr, result){
    console.log({arr, result})
    if(arr.length <= 1){ 

        console.log('line 31', result)
        
        return [...result] }

    const [ head, ...rest ] = arr;

    rest.forEach( i =>{

        result = [...result, `${head}:${i}`]

    })


    handshakes(rest, result)
    





}

console.log('line 53', handshakes([1,2,3,4,5,6],[]))