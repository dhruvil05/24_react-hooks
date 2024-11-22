import React from 'react'

function EmailForm() {
    const id = React.useId()

    return (
        <div className="email-form">
            <label htmlFor={id+'email'}>Email</label>
            <input type="email" id={id+'email'} />

            <label htmlFor={id+'name'}>Name</label>
            <input type="Name" id={id+'name'} />
        </div>
    )
}

export default EmailForm