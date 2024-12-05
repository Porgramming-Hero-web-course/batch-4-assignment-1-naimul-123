{// Problem 3: Create a TypeScript function called countWordOccurrences that accepts a sentence(string) and a word(string).The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
    const countWordOccurrences = (sent: string, word: string): number => {
        const sentArr = sent.toLowerCase().split(' ');
        let count = 0;
        const newWord = word.toLowerCase().trim();
        sentArr.forEach(w => {
            if (w.trim() === newWord) {
                count++
            }
        });
        return count
    }

    // console.log(countWordOccurrences("I love typescript", "typescript"))
}