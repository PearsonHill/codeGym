

// reverse the string using recursion

function go(str){
    console.log('line 6', str)

    if( str === '')
    { return ''}
    else{
        let x = str.slice(0,-1)
       return  go(str)

    }


}

console.log(go('abc'))