/*
A friend of mine has wanted to make a cipher, so I'm 'stealing' his.
This cipher has rules similar to the Cesaer cipher, but instead of a single shift-value across the message, 
the shift-value increases linearly to the number of letters in the word. 
the first letter is shifted by 1, the second by 2, etcetera.

encode: I love cryptography!
coded: J mqyi dtbtyunzjzsk

The code will not work with non-letter characters, except spaces which are allowed. 
*/

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

function encode(string) {
    words = string.toLowerCase().split(' ')
    codeWords = words.map((word) => {
        let encodeWord = ''
        for (let i = 0; i < word.length; i++) {
            let ltrIndx = alphabet.indexOf(word[i])
            // console.log(letter)
            let newIndx = (ltrIndx + i + 1) % 26
            encodeWord += alphabet[newIndx]
        }
        return encodeWord
    })
    return codeWords.join(' ')
}

console.log(encode('I love cryptography'))


function decode(string) {
    words = string.toLowerCase().split(' ')
    codeWords = words.map((word) => {
        let decodeWord = ''
        for (let i = 0; i < word.length; i++) {
            let ltrIndx = alphabet.indexOf(word[i])
            // console.log(letter)
            let newIndx = ((ltrIndx - i - 1) + 26) % 26
            // console.log(ltrIndx, i, newIndx)
            decodeWord += alphabet[newIndx]
        }
        return decodeWord
    })
    return codeWords.join(' ')
}

console.log(decode(encode('I love cryptography wxyz')))

//on line 40, would it work to add 26 to the index calc before you modulo?
