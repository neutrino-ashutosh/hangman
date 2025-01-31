import {  useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {

    const [inputType , setInputType] = useState("password");
    const [value, setValue] = useState("");
    const navigate = useNavigate(); //useNavigate is a hook that returns a navigate function

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("form submitted", value);
        if(value){
            navigate("/play",{state:{word : value}});
        }
    }

    function handleTextInputChange(event){
        console.log("text input changed");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleShowHideClick(){
        console.log("show / hide clicked");
        if(inputType === "password"){
           setInputType("text");
        } else {
           setInputType("password");
        }
    }

    return (
        <>   
        <TextInputForm 
            inputType={inputType}
            handleFormSubmit={handleFormSubmit} 
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
        /> 
        {/* { (inputType === "password") ? <Temp/> : null} */}
        </>
    );
}

// function Temp(){
//     useEffect(() => {
//         console.log("Temp component first load");

//         return () => {
//             console.log("Temp component unmount");}
//     }, [])

//     return (<div> Temp </div>)
// }
// demonstration of useEffect , need to import useEffect whenever you will use it 

export default TextInputFormContainer ;      