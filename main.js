function verifyVowels(str) {
    const vowels = ["A","E","I","O","U","Y"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        const currentLetter = str[i];
        for (let j = 0; j < vowels.length; j++) {
            if (currentLetter.toUpperCase() === vowels[j]) {
                count++;
            }
        }
    }
    console.log(count);
}
verifyVowels("there is many books in this bookshelf.");