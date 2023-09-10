import CharactersLayout from "./components/Character/CharactersLayout";
import PromptField from "./components/Prompt/PromptField";

function Application() {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', width: '100%' }}>
                <PromptField></PromptField>
            </div>
            <br/>
            <CharactersLayout></CharactersLayout>
        </div>
    )
}

export default Application;