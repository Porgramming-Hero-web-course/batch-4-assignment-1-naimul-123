{
    // Problem 1:Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    const sumArray = (arr: number[]): number => {
        const sum = arr.reduce((acc, n) => acc + n, 0);
        return sum
    }
    // console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}