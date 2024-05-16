
const miniArr = [12,13,15,16,4,5,6,7]


//Let's try to merge this
let start = 0
let end = miniArr.length - 1
let middle = Math.floor(end/2)


let firstHalf = miniArr.slice(start,middle + 1)
let secondHalf = miniArr.slice(middle + 1,end + 1)



console.log(firstHalf)
console.log(secondHalf)



function main(array){
    //Merge
    let i = 0
    let j = 0
    
    for(let n = 0; n <= end; n++){
        
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

main(miniArr)
console.log(miniArr)