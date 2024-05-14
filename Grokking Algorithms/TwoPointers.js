console.log("Grokking Two pointers")

const wordArray = ["Radar", "Level", "Window", "Racecar", "Book", "Madam", "Kayak", "Rotator", "Light", "Civic", "Noon", "Music", "Refer", "Sun", "Deified", "Moon", "Drawer", "Star", "Tenet", "Hannah", "Mirror", "Stats", "Tree", "River", "Solos", "Peace", "Minim", "Dream", "Creek", "Flower", "Malayalam", "Cloud", "Repaper", "Silent", "Rain", "Rotator", "Decoded", "Summer", "Eve", "Reviver", "Snow", "Garden", "Lemel", "Animal", "Otto", "Nature", "Bob", "Mom", "Anna", "Eye"]


function isPalindrome(word){
    word = word.toLowerCase()
    let start = 0
    let end = word.length - 1
    while(start < end){
        if (word[start] != word[end]){
            return false
        }
        start++
        end--
    }

    return true

}

function main(){
    for (let word of wordArray){
        let result = isPalindrome(word)
        console.log(word," is ",result)
    }
}


main()