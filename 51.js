//que => Create a variable name in the global scope and a function printName that logs name. Call printName without modifying name, then update name in the global scope and call printName again.

let name="priyanshi";

function printName()
{
    console.log(name);   
}
printName();

name="utkarsh";
printName();
//if you make "name" is const then it will not modify or update