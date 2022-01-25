function pigIt(str){

    let words = str.split(/\s+/g)

    return words.reduce( (rString, word, index, array) =>{

    let hasPunc = word.match(/[^\w\s]/)
    let n = word.length - 1

    let puncAccountedForWord =  hasPunc ? `${word.substring(1, n) + word[0]}ay${hasPunc[0]}` : ` ${word.substring(1) + word[0]}ay`

        index == 0 ? rString = puncAccountedForWord : rString = rString + '' + puncAccountedForWord

    return rString
    },'')

  }

  

  let x = pigIt('Pig latin is cool')


  console.log(x)