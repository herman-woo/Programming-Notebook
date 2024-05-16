console.log("SelectionSort.JS")
/**
 * Basically sorts are always super super important to many algorithms, like how binary search ultimately implements a sort to ensure that the algorithm can work.
 * Selection sort is the simplest of them i think.
 */

//Here are 50 random numbers, all unique

const data = require('./sortData.json')

const largeArray = data.largeNumArray
const smallArray = data.smallNumArray


/**
 * 
 * note to self: the selection sort repeatedly goes through sub arrays to find the smallest value, each subsequent subarray will only contains value smaller than the index immediately before the subarray starts
 * 
 * Seems to me...
 * Selection sort is sort of a brute force sorting method, because with each iteration, you completely loose sight of the other data, and iterate through the array multiple times to definitively find the next smallest data
 */


function selectionSort(array){
        
    for(let i = 0; i < array.length - 1; i++){
        let minValue = array[i]
        let smallestIndex = i
        let placeHolder = 0
        let n = i + 1

        while(n < array.length){
            if(array[n] < minValue){
                minValue = array[n]
                smallestIndex = n
            }
            n++
        }

        if(smallestIndex != n){
            //perform swap if n is something differnt than the current value
            placeHolder = array[i]
            array[i] = minValue
            array[smallestIndex] = placeHolder
        }

    }

    return array
}


function main(array){
    let result = selectionSort(array)
    console.log(result)
}


main(smallArray)
main(largeArray)