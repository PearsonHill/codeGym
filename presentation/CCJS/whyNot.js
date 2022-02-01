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


// {
//     slogan: 'Go team',
//     XL: [QTY, player1, player2],
//     M: [QTY, player3]
// }



// p = player 
let tshirtDataObj = orioles.reduce( ( rObj, p, index, array ) =>{


        // player's t-shirt size - (XL, L, M)
        let t = p.tshirt

        let k = rObj[p.tshirt]

        k ? 

                    (
                        k = [...k, p.name],
                        k[0] += 1
                        

                    )
                        
                :


                    (
                        
                        k = [1, p.name]
                  
                    )








    rObj.slogan +=   
         index == array.length - 1 ?
            ` ${p.name}! Beat the Yankees!` 
            : 
            ` ${p.name},`


      rObj = k      
    return rObj

},
{
    slogan: 'Go'
})


console.log(tshirtDataObj)