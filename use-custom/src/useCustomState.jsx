import React from 'react'

const useCustomState = (initialValue) => {
    const [state,setState] = React.useState(initialValue)
      
  return [state, setState]
}

export default useCustomState