import { useState } from "react";

const useInput = (validateToValid) => {
    const [inputValue, setInputValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const inputIsValid = validateToValid(inputValue);
    const hasError = isTouched && !inputIsValid;

    const inputValueHandler = (event) => {
        setInputValue(event.target.value);
    };

    const inputIsBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setInputValue("");
        setIsTouched(false);
    };

    return {
        inputValue,
        inputIsValid,
        hasError,
        inputValueHandler,
        inputIsBlurHandler,
        reset,
    };
};

export default useInput;
