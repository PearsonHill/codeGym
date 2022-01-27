




function go(x){
    let obj = {}
    let i = 0;
    let sum = 0.01
 
    while( i < x){
        sum = 2^i
        obj[i] = sum
        
        i++
    }

    return obj

}


function for4(x){
    let obj = {}
    let amount = 1 
    for( let day = 1; day <= x; day++){
        amount = amount + amount
        obj[day] = amount


    }

    return obj;


}





function red(current, day, amount, object){

    if( current == day){
        return object
    }else{
            amount = amount * 2
            current = current + 1
            object[day] = amount
            return red(current, day, amount, object )
    }

}


console.log(go(15))
console.log(for4(15))
console.log(red(1,15,.01,{}))