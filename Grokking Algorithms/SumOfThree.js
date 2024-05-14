/**
 * Sum of Three, algorithm
 * 
 * This is where sorted lists become very, very important.
 * With a sorted list we will start with 2 pointers at the first 2 positions and 1 at the end
 * totalling 3 pointers, and then move the middle one if the target is too small, or move the end if current sum is too large
 * 
 * 
 */

function findSumOfThree(array,target){
    array.sort((a,b) =>{
        return a - b
    })


    for(let i = 0; i < array.length - 2; i++){
        let j = i + 1
        let z = array.length - 1
        let result = 0
        // console.log("Inside Loop",i,j,z)
        while(j < z){
            result = array[i] + array[j] + array[z]
            // console.log(result,target)
            if (result == target){
                console.log("RESULT: ", array[i],array[j],array[z])
                return true
            }
            else if(result < target){
                j++
            }
            else{
                z--
            }
        }
    }

    
    return false

}







function main() {
    let numsLists = [
        [3, 7, 1, 2, 8, 4, 5],
        [-1, 2, 1, -4, 5, -3],
        [2, 3, 4, 1, 7, 9],
        [1, -1, 0],
        [2, 4, 2, 7, 6, 3, 1],
    ];

    let testLists = [10, 7, 20, -1, 8];

    numsLists.map((numList, i) => {
        console.log(i + 1 + ".\tInput array:", numsLists[i]);
        
        if (findSumOfThree(numsLists[i], testLists[i]))
            console.log("\tSum for", testLists[i], "exists");
        else console.log("\tSum for", testLists[i], "does not exist");
        
        console.log("-".repeat(100));
    });
}

main();