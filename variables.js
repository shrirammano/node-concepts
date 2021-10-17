const testFunction = () => {
    console.log(newVariable);
    let newVariable = "first";
}

testFunction(); // Outputs ReferenceError





//function on the left will be interpreted as 
const testFunction = () => {
    let newVariable; // Temporal Dead Zone
    console.log(newVariable); // ReferenceError
    newVariable = "first";
}

testFunction();