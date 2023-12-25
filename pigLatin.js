// Vowels
var vowels = ['A', 'E', 'I', 'O', 'U'];

// Consonants
var consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

function translatePigLatin(str) {
    // Split the original word into an array of characters
    let orgWord = [...str];
    
    if (consonants.includes(orgWord[0].toUpperCase())) {
        let ct = 0;

        // Find the consonant cluster at the beginning of the word
        while (ct < orgWord.length && consonants.includes(orgWord[ct].toUpperCase())) {
            ct++;
        }

        // Move the consonant cluster to the end and add 'ay'
        orgWord.push(...orgWord.splice(0, ct), 'ay');
        
        return orgWord.join('');
    }
    
    // If the word starts with a vowel, just add "way"
    orgWord.push("way");
    return orgWord.join('');
}

console.log(translatePigLatin("consonant"));

// // Function to translate a word to Pig Latin
// function translatePigLatin(str) {
//     for (let i = 0; i < str.length; i++) {
//         // Check if the current character is a vowel
//         if (vowels.includes(str[i].toUpperCase())) {
//             // If it is a vowel, move the consonant cluster to the end and add 'ay'
//             return str
//                 .unshift(str[i]) // This line will not work; unshift returns the new length of the array
//                 .push(str[i], "ay"); // This line will not work; push returns the new length of the array
//             break; // This break statement will never be reached due to the return statement above
//         }
//         // If no vowels are found in the first iteration, add 'way' to the end of the word
//         return [...str].push("way"); // This line will not work as intended; push returns the new length of the array
//         break; // This break statement will never be reached due to the return statement above
//     }
// }

// Example usage

// This section is commented out and does not affect the code execution
// Split a word into chars!
// function translatePigLatin(str) {
//     orgWord = [...str]
//     return orgWord
// }
