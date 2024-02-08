// Your code goes here
const rapid = (myStr) => {
    let consonants = [];

    for (let letter of myStr.toLowerCase()) {
        if (['a', 'e', 'i', 'o', 'u'].includes(letter) == false)
            consonants.push(letter.toUpperCase());
    }
    return consonants.join('');
}

// Work above this line; do not change code below
let str = "El Alberto, el que te dejo el culo abierto.!";
console.log(rapid(str));
