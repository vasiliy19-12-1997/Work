import React, {useCallback, useEffect, useState} from "react";

import create from "zustand/react";

interface InputPlusProps {
    getGreeting: (title:string) => void;
}

export const Example: React.FC<InputPlusProps>=({
    getGreeting,
}) =>{
    const [inputValue, setInputValue] = useState('')
    const addTask = useCallback(()=> {
        getGreeting(inputValue);
        setInputValue('');
    }, [inputValue])

    return (
        <div>

        </div>
    )
};
