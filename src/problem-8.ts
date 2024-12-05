{
    // Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    type T = {
        name: string;
        age: number;
        email: string

    }
    function validateKeys(obj: T, keys: (keyof T)[]) {
        const objKeys = Object.keys(obj)
        let isExist = false
        for (const key of keys) {
            if (objKeys.includes(key as string)) {
                isExist = true
            }
            else {
                isExist = false
                return isExist
            }
        };
        return isExist

    }

    // console.log(validateKeys(person, ["age", "name"]));

}