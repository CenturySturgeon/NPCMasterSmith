export class Character {
    constructor(id, campaign, image, name, quote, appearance, roleplayProps) {
        this.Id = parseInt(id);
        this.Campaign = campaign;
        this.Image = image;
        this.Name = name;
        this.Quote = quote;
        this.Appearance = appearance;
        this.Roleplay = roleplayProps;
    }
}

// POST request to create a new character
export function postCharacter(data) {

    const jsonData = JSON.stringify(data);

    const url = '/postCharacter';

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

// PUT request to update the character
export function putCharacter(character) {
    const jsonData = JSON.stringify(character);

    const url = '/putCharacter';

    const requestOptions = {
        method: 'PUT',
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

// DELETE request to delete the character
export function deleteCharacter(id) {
    const jsonData = JSON.stringify(id);

    const url = '/deleteCharacter';

    const requestOptions = {
        method: 'DELETE',
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