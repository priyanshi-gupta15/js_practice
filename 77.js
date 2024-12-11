// que Error Handling with Callback: Modify the fetchData function to add an error scenario. Pass a second argument (an error callback) that logs "Error fetching data" if an error occurs (e.g., a 50% chance of success).

function fetchData(successCallback, errorCallback) {
    try {
        // Simulate a random success or failure scenario (50% chance each)
        const isSuccess = Math.random()>0.5;

        setTimeout(() => {
            if (isSuccess) {
                successCallback("Data fetched successfully!");
            } else {
                throw new Error("Error fetching data");
            }
        }, 2000);
    } catch (error) {
        errorCallback("some error");
    }
}

// Success callback 
function onSuccess(data) {
    console.log(data);
}

// Error callback
function onError(error) {
    console.error(error);
}


fetchData(onSuccess, onError);
fetchData(onSuccess, onError);
fetchData(onSuccess, onError);
fetchData(onSuccess, onError);
fetchData(onSuccess, onError);
fetchData(onSuccess, onError);
