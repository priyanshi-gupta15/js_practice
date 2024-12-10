// que => Scope Chain Access: Write a function outerFunc that defines a variable a and another function innerFunc inside it, which defines a variable b and another function innermostFunc inside it that logs both a and b. Call innermostFunc to observe how the scope chain works.

function outerFunc()
{
    let a=9;
    function innerFunc()
    {
       let b=8;
        function innermostFunc()
        {
            console.log(a);
            console.log(b);
        
        }
        innermostFunc();

    }
    innerFunc();

}
outerFunc();