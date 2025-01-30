import { useLocation } from "react-router-dom"
import MaskedText from "../components/MaskedText/MaskedText";
function PlayGame(){
    
    const {state} = useLocation();
    console.log(state.word);

    return (
        <>
            <h1> Play Game </h1>
            <MaskedText text={state.word} guessedLetters={['H','E']}/>
        </>
    )
}

export default PlayGame