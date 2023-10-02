export class Character {
    constructor(id, campaign, image, favorite, name, quote, appearance, roleplayProps) {
        this.Id = parseInt(id);
        this.Campaign = campaign;
        this.Image = image;
        this.Favorite = Boolean(favorite);
        this.Name = name;
        this.Quote = quote;
        this.Appearance = appearance;
        this.Roleplay = roleplayProps;
    }
}

// GET request to fetch all characters
export function getCharacters() {

    const url = '/characters';

    // Fetch should be returned so the call to the function can make use of the 'then' and 'catch' sentences to execute further logic
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
}

/**
 * POST request to create a new character.
 *
 * @param {string} character - The base character object to create.
 * @returns {Promise<number>} A Promise that resolves with the HTTP status code of the response.
 * @throws {Error} If the network response is not successful (status code other than 2xx).
 */
export function postCharacter(character) {

    const jsonData = JSON.stringify(character);

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
            if (response.status != 201) {
                throw new Error('Network response was not 201');
            }
            return response.json();
        })
}

/**
 * PUT request to update the character.
 *
 * @param {string} character - The character object to update.
 * @param {string} onlyUpdateIsFavorite - Boolean, false by default, that determines if only the isFavorite prop will be updated.
 * @returns {Promise<number>} A Promise that resolves with the HTTP status code of the response.
 * @throws {Error} If the network response is not successful (status code other than 2xx).
 */
export function putCharacter(character, onlyUpdateIsFavorite = false) {
    const jsonData = JSON.stringify(character);

    const url = '/putCharacter';

    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Only-Update-Is-Favorite': Boolean(onlyUpdateIsFavorite)
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