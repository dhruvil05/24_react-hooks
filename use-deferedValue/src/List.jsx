import React, { useEffect } from 'react'

function List({ input }) {
    const LIST_SIZE = 10000;
    const deferredInput = React.useDeferredValue(input)

    const list = React.useMemo(() => {
        const l = []
        for (let i = 0; i < LIST_SIZE; i++) {
            l.push(<div key={i}>{deferredInput}</div>)
        }
        return l
    }, [deferredInput])
    
    useEffect(() => {
        console.log(`Input: ${input} \nDeferred: ${deferredInput}`);
        
    }, [input, deferredInput])
    return list
}

export default List