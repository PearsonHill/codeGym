let x = [
    5,7,3,9,11,4,10
]




function bookend(arr, result){
    console.log('line 9', arr)

    if(arr.length == 1){
        result = [...result, ...arr]

        console.log(result)

        return [...result, ...arr]
    }

    const [ head, ...rest] = arr

    let end = rest.pop()

    result = [...result, head, end]

    console.log('line 22', result)
    bookend(rest, result)






}

let y = bookend(x,[])

console.log('line 37', y )













