import React, { useImperativeHandle } from 'react'

function CustomInput({...props}, ref) {
    const byeref = React.useRef()

    useImperativeHandle(ref, () => {
        return {
            alertHi: () => alert('Hi'),
            alertBye: () => byeref.current.focus()
        }
    }, [props.value])

    return (
        <div className="input-group mb-3">
            <input {...props}  />

            <input type="text" ref={byeref}  value='Bye'  readOnly/>
        </div>
    )
}

export default React.forwardRef(CustomInput)