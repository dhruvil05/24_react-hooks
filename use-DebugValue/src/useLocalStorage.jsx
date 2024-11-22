import React from "react";

function getSavedValue(key, defaultValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))

    if(savedValue) return savedValue;

    if(defaultValue instanceof Function) return defaultValue();
    return defaultValue
}

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = React.useState(() => {
        return getSavedValue(key, defaultValue)
    })

    // React.useDebugValue(value)
    
    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))

    }, [value])

    return [value, setValue]
}