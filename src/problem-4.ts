{// Problem 4: Define a union type Circle and Rectangle, where each type has a unique shape property.Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.


    type Circle = {
        shape: "circle";
        radius: number
    }
    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number
    }

    type Shape = Circle | Rectangle

    const calculateShapeArea = (x: Shape): number => {
        if (x.shape === "circle") {
            const area = parseFloat((Math.PI * x.radius * x.radius).toFixed(2))
            return area
        }
        else if (x.shape === "rectangle") {
            const area = parseFloat((x.width * x.height).toFixed(2));
            return area
        }
        else return 0
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });

}