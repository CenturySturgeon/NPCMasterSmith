/**
 * Function that selects the characters for the campaign icon of the character card.
 *
 * @param {string} campaign - The character's campaign.
 * @returns {boolean} - The first letter of the first two words or the first two letters of the only word provided (N/A if there's no campaign).
 */
export function getCampaignChars(campaign) {
    if (campaign != '') {
        const wordArray = campaign.split(" ");
        if (wordArray.length > 1) {
            return (wordArray[0][0].toUpperCase() + wordArray[1][0].toUpperCase());
        } else {
            return (campaign[0].toUpperCase() + campaign[1].toUpperCase());
        }
    } else {
        return 'N/A';
    }
}