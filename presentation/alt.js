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


let totalHR = 0

for(let i = 0; i < orioles.length ; i++){ 

    totalHR += orioles[i].hr
}

let teamAvg = totalHR / orioles.length



let totalHR = orioles.reduce( (total, batter) => total + batter.hr, 0)




let teamStats = orioles.reduce( (rObj, batter, index, array) =>{

        rObj.total += batter.hr

        if( index == array.length - 1){
            rObj.avg = rObj.total / array.length
        }


        return rObj
},{
    total: 0,
    avg: 0
})










reduce([🐮,🥔,🐔,🌽 ])