// Compare and update the inventory stored in a 2D array 
// against a second 2D array of a fresh delivery. 
// Update the current existing inventory item quantities (in arr1). 
// If an item cannot be found, add the new item and quantity into the inventory array. 
// The returned inventory array should be in alphabetical order by item.


function updateInventory(curInv, newInv){

    // create obj of curInv:tot
    // [2, "Hair Pin"]

    let curObj = curInv.reduce( (rObj, item, index, array) =>{
        let name = item[1]
        let qty = item[0]

        rObj[name] ? rObj[name] += qty : rObj[name] = qty;

        return rObj


    }, {})



     // loop thru new compare keys update inventory number 

    let updateObj = newInv.reduce( (rArr, item, index, array) =>{
        let name = item[1]
        let qty = item[0]

        curObj[name] ? curObj[name] += qty : curObj[name] = qty;

        return curObj

    }, [])

    // sort and turn key:values into an array from the Object

    return Object.keys(curObj).sort().reduce( (rArr, item, index, array) =>{

        let k = item
        let v = curObj[item]
        console.log('line 42', item)

        rArr = [...rArr, [v,k]]

        return rArr

    },[])

}



console.log(
    updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) 
)