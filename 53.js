//que => Lexical Scope and Nested Functions: Write a function outer that defines a variable message with a string of your choice. Inside outer, define another function inner that logs message. Call inner inside outer to test if inner can access message.
function outer() {
    const message = "I am out from the inner block";

    function inner() {
        console.log(message); //yes it can access
    }

    inner();
}

outer();
