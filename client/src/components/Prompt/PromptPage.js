import PromptField from "./PromptField";

const PromptPage = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection:'column', flexGrow: 1, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <p>Spacing Test</p>
            <PromptField theme={props.theme}></PromptField>
        </div>
    )
}

export default PromptPage;