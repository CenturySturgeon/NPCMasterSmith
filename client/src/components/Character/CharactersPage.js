import { useState } from 'react';
import { Character } from '../API/API';
import CharactersLayout from "./CharactersLayout";
import ActionsSpeedDial from "../ActionsSpeedDial/ActionsSpeedDial";

import man_image from '../../../public/images/profile_man.png'
import woman_image from '../../../public/images/profile_woman.png'

const appearance = "A brief, physical description of the character goes here";
const roleplayProps = ["My first roleplay property", "My second roleplay property", "My third roleplay property"];
const dummyM = new Character(0, "", man_image, false, "Name of Character", "Hereby is thy quote, a brief phrase said by the character", appearance, roleplayProps);
const dummyF = new Character(0, "", woman_image, false, "Name of Character", "Hereby is thy quote, a brief phrase said by the character", appearance, roleplayProps);

/**
 * Function randomDummy randomly chooses between the male or female character variant.
 *
 * @returns {Character} A character object.
 */
function randomDummy() {
    // The '0.5' number is the probability to get 'true' as a result.
    if (Math.random() < 0.5) {
        return dummyM;
    } else {
        return dummyF;
    }
}

const CharactersPage = (props) => {
    const [dummies, setDummies] = useState([]);

    function addDummy() {
        dummy = randomDummy();
        setDummies([...dummies, dummy]);
    }

    return (
        <>
            <CharactersLayout dummies={dummies} />
            <ActionsSpeedDial addDummy={addDummy}/>
        </>
    )
}

export default CharactersPage;