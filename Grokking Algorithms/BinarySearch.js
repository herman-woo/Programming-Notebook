console.log("BinarySearch.JS")
/**
 * The primary goal of binary search is to identify the index for the value we're searching for
 * Rather than simply iterating through the array once to find what we're looking for, which would take 
 * 
 * Time Complexity:
 * - The time complexity of this search algorithm is O(logn), it will never take n time, and at a large enough n, the difference is negligable
 * 
 * Note: this array contains duplicates, dont have any logic at the moment to handle dupes, ie: make a set.
 */

const data = [7, 19, 19, 38, 42, 44, 47, 69, 72, 80, 88, 90, 96, 139, 141, 143, 152, 172, 180, 203, 209, 213, 225, 234, 241, 242, 267, 275, 289, 299, 308, 316, 319, 321, 344, 347, 379, 387, 400, 402, 405, 407, 423, 454, 456, 461, 462, 471, 514, 515, 517, 519, 525, 527, 533, 541, 543, 558, 576, 604, 615, 619, 644, 647, 660, 670, 670, 670, 674, 675, 677, 681, 686, 703, 706, 712, 717, 745, 758, 769, 794, 798, 811, 814, 823, 852, 891, 892, 893, 902, 906, 911, 939, 946, 952, 961, 968, 969, 987, 987]


//Find the index of a number

function binarySearch(array,target){

    
    let low = 0
    let high = array.length - 1
    let result = undefined
    
    if(target > array[array.length - 1]){
        return undefined
    }
    if(target < array[0]){
        return undefined
    }
    while(low < high){
        let mid = Math.floor((low + high) / 2)
        if(mid == low){
            return undefined
        }
        if (array[mid] == target){
            return mid
        }
        else if(array[mid] < target){
            low = mid
        }
        else if(array[mid] > target){
            high = mid
        }
        else{
            return undefined
        }
    }
    
    return result
}



function main(target){
    const sortedSet = new Set(data)
    const uniqueArray = Array.from(sortedSet)
    let targetIndex = binarySearch(uniqueArray,target)
    console.log(targetIndex)
}
main(0)
main(139)
main(209)
main(666)
main(1000)