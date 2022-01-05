function sym(args) {

    let arr = [...arguments]

   
    let uniques =  arr.reduce( (rArr, set, index, array) =>{

        let unique = set.reduce( (rArr, num, index, array) =>{
            rArr.includes(num) ? null : rArr = [...rArr, num]
            return rArr
        },[] )

        rArr = [...rArr, unique]

        return rArr
     },[])

    return uniques.reduce( (rArr, set, index, array) =>{
      
        console.log('line 20', set)
        set.forEach( (setNum) =>{
        
            console.log('line 23', setNum)
            rArr.includes( setNum ) ? (
                    console.log('line 26 - YES CONTAINS'),

                    rArr = rArr.filter( num => num != setNum),

                    console.log('line 30',rArr)

                )
                : 
            
                rArr = [...rArr, setNum]

        })

       
        console.log('line 44', rArr)
        return rArr

     },[])

  
    }
  
  console.log(sym([1, 2, 5], [2, 3, 3, 5], [3, 4, 5]));