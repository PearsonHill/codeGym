
// thank  you: https://www.baseball-reference.com/teams/BAL/2021.shtml

let orioles = [
    {
        name: 'Pedro',
        age: 27,
        hr: 11,
        ba: .248,
        obp: .308,
        tshirt: 'XL' 
    },
    {
        name: 'Ryan',
        age: 24,
        hr: 33,
        ba: .255,
        obp: .309,
        tshirt: 'XL' 
    },
    {
        name: 'Pat',
        age: 28,
        hr: 5,
        ba: .201,
        obp: .250,
        tshirt: 'L' 
    },
    {
        name: 'Freddy',
        age: 31,
        hr: 9,
        ba: .249,
        obp: .306,
        tshirt: 'M' 
    },
    {
        name: 'Maikel',
        age: 28,
        hr: 11,
        ba: .210,
        obp: .252,
        tshirt: 'L' 
    },
    {
        name: 'Austin',
        age: 25,
        hr: 22,
        ba: .256,
        obp: .308,
        tshirt: 'XL' 
    },
    {
        name: 'Cedric',
        age: 26,
        hr: 30,
        ba: .291,
        obp: .360,
        tshirt: 'L' 
    },
    {
        name: 'Anthony',
        age: 26,
        hr: 18,
        ba: .241,
        obp: .286,
        tshirt: 'XL' 
    },
    {
        name: 'Trey',
        age: 29,
        hr: 21,
        ba: .255,
        obp: .326,
        tshirt: 'XL' 
    },

  
]

// standard usage of .reduce NUMBER
// total homeruns of the team

let homers = orioles.reduce( (total, player) => total += player.hr, 0)

console.log('TEAM HOME RUNS: ', homers)



// average age of the team NUMBER
// expand what is going on under the hood of .reduce

let avgAge = orioles.reduce( (rInt, player, index, array) =>{

    rInt += player.age

    if( index == array.length - 1 ){

        rInt = rInt / array.length
    }
    
    console.log('line 27', rInt)
    return rInt 

}, 0)


console.log('line 101', avgAge)







// 2022 Sluggin' Order ARRAY








// frequency counter OBJECT
// shirt size 'Believe' 

let tShirtCount = orioles.reduce( (rObj, player, index, array ) =>{

    let key = player.tshirt

    

    rObj[key] ? 

        rObj[key] = {players : [...rObj[key].players, player.name] }
        :
        rObj[key] = {players : [player.name] }



    rObj[key].qty = rObj[key].players.length
    


    return rObj
},{})

console.log('T Shirt Order: ', tShirtCount)









// Go Banner STRING 

let bannerText = orioles.reduce( (rStr, item, index, ogArray ) =>{
    

    rStr = rStr + `${item.name}`

    if( index == ogArray.length -1 ){

        rStr = rStr + `! Beat the Yankees!!!`

    }else{
        rStr = rStr + `, `
    }

    return rStr



}, 'Go ')

console.log('line 63', bannerText)