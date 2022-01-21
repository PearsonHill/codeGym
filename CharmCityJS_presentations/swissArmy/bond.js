


let spyBase = [
    {

        name: 'James Bond',
        organization: 'MI6',
        weapon: "Gun",
        isGood: true

    },
    {

        name: 'Q',
        organization: 'MI6',
        weapon: "Brain",
        isGood: true

    },
    {

        name: 'M',
        organization: 'MI6',
        weapon: "Gun",
        isGood: true

    },
    {

        name: 'MoneyPenny',
        organization: 'MI6',
        weapon: "Gun",
        isGood: true

    },
    {

        name: 'Goldfinger',
        organization: 'MI6',
        weapon: "Gun",
        isGood: false

    },
    {

        name: 'Jaws',
        organization: 'various',
        weapon: "Gun",
        isGood: false

    },
    {

        name: 'Blofeld',
        organization: 'Spectre',
        weapon: "Gun",
        isGood: false

    },
    {

        name: 'Dr No',
        organization: 'Spectre',
        weapon: "Gun",
        isGood: false

    }
]




// true false - M coordinates a gala for spies 
// and wants to make sure the list only contains good guys


let seatingChart = spyBase.reduce( (rObj, spy, index, array) =>{

   if( spy.isGood !== rObj.fA[index-1].isGood || 'abc' ){

        rObj.fA = [...rObj.fA, spy]

   }

   return rObj




},
{

    fA: [], // final arrangement
    isBad: [],
    isGood: []

})


console.log('line 101', seatingChart)
// tickerTape watch  : concat strings based on variable