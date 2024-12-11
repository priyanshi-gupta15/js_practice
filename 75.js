//que=>Simple Callback Function: Write a function processData that takes two arguments: a data string and a callback function. processData should call the callback function with the data string in uppercase. Test it by passing a callback that logs the result.

function processData(data,callback)
{
    string_converter(data);

}
function string_converter(data)
{
    console.log( data.toUpperCase());
    
}
processData("priyanshi",string_converter)
processData("utkarsh",string_converter)