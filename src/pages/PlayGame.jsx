import { Link, useLocation } from "react-router-dom"
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/HangMan/HangMan";
function PlayGame(){
    
    const {state} = useLocation();

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);

    function handleLetterClick(letter){
        if(state.word.toUpperCase().includes(letter)) {
            console.log("correct");
        } else {
            console.log("wrong");
            setStep(step + 1);
        }

        setGuessedLetters([...guessedLetters, letter]); 
    }

    return (
        <>
            <h1> Play Game </h1>
            <MaskedText text={state.word} guessedLetters={guessedLetters}/>

            <div >
            <LetterButtons text={state.word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
            </div>
            <div>
                <HangMan step={step}/>
            </div>

            <Link to='/start' className="text-blue-500 hover:text-blue-700">Start Game</Link>
        </>
    )
}

export default PlayGame