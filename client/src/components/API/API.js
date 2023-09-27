export class Character {
    constructor(id, campaign, image, name, quote, appearance, roleplayProps){
        this.id = id;
        this.campaign = campaign;
        this.image = image;
        this.name = name;
        this.quote = quote;
        this.appearance = appearance;
        this.roleplayProps = roleplayProps;
    }
}

export function testPOST(data) {

    const jsonData = JSON.stringify(data);

    const url = '/testPOST';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonData,
    };
    
    // Fetch should be returned so the call to the function can make use of the 'then' and 'catch' sentences to execute further logic
    return fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.status;
        })
}