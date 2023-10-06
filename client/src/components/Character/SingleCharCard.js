import CharacterCard from "./CharacterCard"
import man_image from '../../../public/images/profile_man.png'

const SingleCharCard = () => {
    return (
        <CharacterCard
            isOnlyCard={true}
            id={0}
            campaign={""}
            image={man_image}
            favorite={false}
            name={"AI Created Character"}
            quote={"Hello There"}
            appearance={"My appearance"}
            roleplayProps={["Prop1", "Prop2", "Prop3"]}
        />
    )
}

export default SingleCharCard;