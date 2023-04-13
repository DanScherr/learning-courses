import { createContext, useReducer } from 'react'
import alertReducer from './AlertReducer'


const AlertContext = createContext()


export const AlertProvider = ({children}) => {
    const initialState = null // null by default so when we have an allert it'll just be a msg
    // but if we wanted to we could set it to an object
    const [state, dispatch] = useReducer(alertReducer, initialState)

    const setAlert = (msg, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type},
        })

        setTimeout(() => dispatch({ type: 'REMOVE_ALERT'}), 3000) // will remove allert after 3 seconds

    }

    return (
        <AlertContext.Provider 
            value={{
                alert: state,
                setAlert,
            }}
        >
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext