const inputArray = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
console.log('inputArray', inputArray)
// function anagramWithAscii(arrayOfStrings) {

//     let totalAsciiArray = [];
//     for (let i = 0; i < arrayOfStrings.length; i++) {
//         console.log(arrayOfStrings[i])
//         let asciiAmount = 0;
//         for (let j = 0; j < arrayOfStrings[i].length; j++) {
//             // arrayOfStrings[i]   // kita  
//             asciiAmount = asciiAmount + arrayOfStrings[i].charCodeAt(j)
//             if (j === arrayOfStrings[i].length - 1) {
//                 totalAsciiArray.push({ word: arrayOfStrings[i], asciiAmount })
//             }  // 3 === 4 - 1
//             // console.log({ i, j ,result: arrayOfStrings[i].charCodeAt(j), asciiAmount})
//         }
//     }
//     console.log("🚀totalAsciiArray", totalAsciiArray)

//     ////////////////////////////////////////////////

//     // for (let i = 0; i < totalAsciiArray.length; i++) {
//     //     for (let j = i + 1; j < totalAsciiArray.length; j++) {
//     //         if (totalAsciiArray[i].asciiAmount < totalAsciiArray[j].asciiAmount) {
//     //             let tempToBeSwapped = totalAsciiArray[i]
//     //             totalAsciiArray[i] = totalAsciiArray[j]
//     //             totalAsciiArray[j] = tempToBeSwapped
//     //         }
//     //     }
//     // }
//     // console.log('after sorted', totalAsciiArray)

//     let uniqueObject = {}
//     for (let i = 0; i < totalAsciiArray.length; i++) {
//         if (!uniqueObject.hasOwnProperty(totalAsciiArray[i].asciiAmount)) {
//             uniqueObject[totalAsciiArray[i].asciiAmount] = [totalAsciiArray[i].word]
//         } else {
//             uniqueObject[totalAsciiArray[i].asciiAmount].push(totalAsciiArray[i].word)
//         }
//     }

//     return Object.values(uniqueObject)
// }

// console.log('anagramWithAscii', anagramWithAscii(inputArray))


//////////////////////////////////////////////////

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