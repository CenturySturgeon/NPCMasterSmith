export function testPOST(data) {

    const jsonData = JSON.stringify(data);

    const url = '/testPOST';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: jsonData, // Pass the JSON data as the request body
    };

    fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                console.log('err',response);
                throw new Error('Network response was not ok');
            }
            return response.json(); // If you expect a JSON response from the server
        })
        .then(data => {
            console.log(data); // Handle the response from the server
        })
        .catch(error => {
            console.error('Error:', error);
        });
}