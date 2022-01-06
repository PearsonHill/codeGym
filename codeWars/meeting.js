let str = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

function go(str){

    let rawArr = str.split(';')

    console.log('line 9', rawArr)


    let sortedLastFirstArr = rawArr.reduce( (rArr, str, index, array) =>{

       let y = str.toUpperCase()
                    .split(':')

        let obj = {
            first: y[0],
            last:y[1]
        }

        rArr = [...rArr, obj]
            .sort( (a,b) => 
                (a.last > b.last) ? 1 : (a.last === b.last ? (a.first < b.first) ? 1 : -1 : -1) )
                  
       

        return rArr

    }, [])


  let x = sortedLastFirstArr.reduce( (rStr, nameObj, index, array) =>{

        let nameStr = `(${nameObj.last}, ${nameObj.first})`
        rStr = rStr.concat(nameStr)


        return rStr
    }, '')


   return `'${x}'`

}

console.log('line 47',go(str))