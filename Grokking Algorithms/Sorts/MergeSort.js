console.log("MergeSort.js")
/**
 * Merge Sort:
 * trying to learn how to recursively call this function as well, where we need base cases
 */


//Case 1
//Let's see if we can just implment code where we simply break an array of 8 until it hits it's base case

const data = require('./sortData.json')
const largeArray = data.largeNumArray
const smallArray = data.smallNumArray
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8]
const exampleArray = [14, 7, 3, 12, 9, 11, 6, 2]

// function merge(array, p, q, r) {
//     let a = [], b = [], c = p, d, e;

//     for (d = 0; c <= q; d++, c++) {
//         a[d] = array[c];
//     }
//     for (e = 0; c <= r; e++, c++) {
//         b[e] = array[c];
//     }

//     c = p;

//     for (e = d = 0; d < a.length && e < b.length;) {
//         if (a[d] < b[e]) {
//             array[c] = a[d]; d++;
//         }
//         else {
//             array[c] = b[e]; e++;
//         } c++;
//     }

//     for (; d < a.length;) {
//         array[c] = a[d]; d++; c++;
//     }
//     for (; e < b.length;) {
//         array[c] = b[e]; e++; c++;
//     }
// }




const shortArray = [4, 6, 2, 1]

function merge(array,p,q,r){

    let firstHalf = array.slice(p,q+1)
    let secondHalf = array.slice(q+1,r+1)

    let i = 0
    let j = 0

    for(let n = p; n <= r; n++){
        if(i < firstHalf.length && j < secondHalf.length){
            if(firstHalf[i] < secondHalf[j]){
                array[n] = firstHalf[i]
                i++
            }
            else if(secondHalf[j] < firstHalf[i]){
                array[n] = secondHalf[j]
                j++
            }
        }else{
            if(i >= firstHalf.length){
                array[n] = secondHalf[j]
                j++
            }
            else if(j >= secondHalf.length){
                array[n] = firstHalf[i]
                i++
            }
        }

    }


}


function mergeSort(arr,start,end){

    if (start >= end){
        return
    }

    let middle = Math.floor((start + end)/2)

    mergeSort(arr,start,middle)
    mergeSort(arr,middle+1,end)
    merge(arr,start,middle,end)
    return 
}


function main(array){
    let start = 0
    let end = array.length - 1
    let result = mergeSort(array,start,end)
    console.log(array)
}

main(smallArray)
main(largeArray)
//main(exampleArray)
