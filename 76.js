//que=>Callback with Delay: Write a function fetchData that simulates fetching data from a server. Use setTimeout to delay the call by 2 seconds. Pass a callback to fetchData that logs "Data fetched!" when called.


function fetchData(callback)
{
    console.log("Fetching data...");
    setTimeout(() => {
     fetching_status();
    }, 2000);
}

function fetching_status()
{
    console.log("Data Fetched");
    
}

fetchData(fetching_status);