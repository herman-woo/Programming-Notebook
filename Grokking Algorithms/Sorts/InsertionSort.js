console.log("InsertionSort.JS")
/**
 * All sort will share the same data set
 */

//Here are 50 random numbers, all unique

const data = require('./sortData.json')
const largeArray = data.largeNumArray
const smallArray = data.smallNumArray



function insertionSort(array){

    for(let i = 0; i < array.length-1; i++){        
        let j = i + 1

        while(array[j] < array[j - 1]){
            let placeHolder = array[j-1]
            array[j-1] = array[j]
            array[j] = placeHolder
            j--
        }

    }

    return array
}


function main(array){
    let result = insertionSort(array)
    console.log(result)
}

main(smallArray)
main(largeArray)