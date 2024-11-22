import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function ModalExample() {
    const [show, setShow] = useState(false)
    const popup = useRef()
    const button = useRef()
    
    useEffect(() => {
        if(popup.current == null || button.current == null) return;
        // const { button } = button.current.getBoundingClientRect()
        // console.log(button);
        
        popup.current.style.top = `${250 + 25}px`
    }, [show])

    return (
        <>
            <button ref={button} onClick={() => setShow(prev => !prev)}> Click Here </button>

            {show && (
                <div ref={popup} style={{position: 'absolute'}}>
                    This is a popup
                </div>
            )}
        </>
    )
}

export default ModalExample;