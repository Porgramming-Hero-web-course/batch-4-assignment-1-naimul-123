{// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object..

    type Person = {
        name: string;
        age: number
    }
    const getProperty = <Q>(obj: any, prop: string): Q | undefined => {
        if (Object.keys(obj).includes(prop)) {
            const val = obj[prop]
            return val
        }
    }
    const person = { name: "Alice", age: 30 };
    // console.log(getProperty(person, "name"));
}