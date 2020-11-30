const inputArray = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
console.log('inputArray', inputArray)

// SUCCESS 95%
function mySortFunction(string) {
    let splitToArray = string.split('')
    for (let i = 0; i < splitToArray.length; i++) {
        for (let j = i + 1; j < splitToArray.length; j++) {
            if (splitToArray[i] > splitToArray[j]) {
                let tempToBeSwapped = splitToArray[i]
                splitToArray[i] = splitToArray[j]
                splitToArray[j] = tempToBeSwapped
            }
        }
    }
    return splitToArray.join('')
}

function anagram(arrayOfStrings) {
    let uniqueObject = {}
    for (let i = 0; i < arrayOfStrings.length; i++) {
        let sortedWord = mySortFunction(arrayOfStrings[i])
        if (!uniqueObject.hasOwnProperty(sortedWord)) {
            uniqueObject[sortedWord] = [arrayOfStrings[i]]
        } else {
            uniqueObject[sortedWord].push(arrayOfStrings[i])
        }
    }
    return Object.values(uniqueObject)
}

console.log('anagram()', anagram(inputArray))

// SUCCESS 100% AS EXPECTED OUTPUT
function superSortedAnagram(arrayOfArrays) {
    for (let i = 0; i < arrayOfArrays.length; i++) {
        for (let j = i+1; j < arrayOfArrays.length; j++) {
            if(arrayOfArrays[i].length === arrayOfArrays[j].length){
                // console.log('lol', arrayOfArrays[i][0], arrayOfArrays[j][0]);
                let firstLength = 0;
                let secondLength = 0;
                for (let k = 0; k < arrayOfArrays[i].length; k++) {
                    firstLength = firstLength + arrayOfArrays[i][k].length
                    secondLength = secondLength + arrayOfArrays[j][k].length
                    // console.log({firstLength, secondLength})
                    if(firstLength < secondLength){
                        let temp = arrayOfArrays[i]
                        arrayOfArrays[i] = arrayOfArrays[j]
                        arrayOfArrays[j] = temp
                    }
                }
            }            
        }
    }
    return arrayOfArrays
}

console.log('superSortedAnagram', superSortedAnagram(anagram(inputArray)))


// let obj = {}
// let siap = 'READY'
// let berhenti = 'STOP'
// obj[siap] = [berhenti]  // obj { READY: 'STOP' }
// console.log('obj', obj)

// let hosh = {};
// let sortedStr = 'aikt'
// console.log('!hosh[sortedStr]', (!hosh[sortedStr]))