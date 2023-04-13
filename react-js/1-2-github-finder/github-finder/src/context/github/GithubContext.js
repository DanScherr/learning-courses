import { createContext, /* useState */ useReducer } from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    /** States */ // switched for Reducer
    /* const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true) */

    /** Reducer */
    const initialState = {
        users: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    /** FUNC */
    // Get initial users (testing purposes) - was being used on UserResults for testing
    const fetchUsers = async () => {
        setLoading()
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        /* setUsers(data)
        setLoading(false) */
        dispatch({ //updates the state for the Reducer
            type: 'GET_USERS',
            payload: data,
        })
    }

    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text,
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const { items } = await response.json() // destructor the items from data array

        console.log(items)
        /* setUsers(data)
        setLoading(false) */
        dispatch({ //updates the state for the Reducer
            type: 'GET_USERS',
            payload: items,
        })
    }

    const clearUsers = () => dispatch({
        type: 'CLEAR_USERS'
    })

    const setLoading = () => dispatch({
        type: 'SET_LOADING',
    })

    return <GithubContext.Provider 
        value = {{
            users: state.users,
            loading: state.loading,
            searchUsers,
            clearUsers,
        }}
    >
        {children}
    </GithubContext.Provider>
}

export default GithubContext