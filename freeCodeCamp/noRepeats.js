

function permAlone(str){
    let num = 0;

    // find all permutations

        // identify positions of string

        // figure out position algo that makes all position combination

        // apply algo to each letter of string

    // reduce strings if two positions are the same letter
    
    let i = 0
    let x = []
    while(i < str.length){
        x = [...x, i]
        i++
    }

    console.log('line 15', x)

    let y = x.reduce ( (rObj, pos, index, array) =>{

              rObj[pos] = pos
            
              return rObj

    }, {})

    console.log('line 33', y)
   









    return num

}


permAlone('aab');