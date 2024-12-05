{
    // Problem 2:Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed.Preserve the original order of elements.
    const removeDuplicates = (arr: number[]): number[] => {

        let newArray: number[] = [];
        arr.filter((n) => {
            if (!(newArray.includes(n))) {
                newArray.push(n)
            }
        })
        return newArray;
    }

    const numbers = [2, 3, 5, 6, 5, 3, 2, 1, 5, 3, 2, 1, 2, 5, 6, 7];
    const removed = removeDuplicates(numbers);
    // console.log(removed);
}