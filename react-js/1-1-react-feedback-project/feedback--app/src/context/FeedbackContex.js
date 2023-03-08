import { createContext, useEffect, useState } from 'react';
/* import { v4 as uuidv4 } from 'uuid' */


const FeedbackContext = createContext();


export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const[feedback, setFeedback] = useState([])
    /*
        id: '1',
        text: 'This item is from context',
        rating: 10,
    }]) */

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {}, // by default it's going to be empty
        edit: false, // so that when we click it it'll be set to true

    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch("/feedback?_sort=id&_order=desc")
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    const addFeedback = async ( newFeedback ) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })
        const data = await response.json()
        /* newFeedback.id = uuidv4() */ // most backends create id automattically so we dont need
        setFeedback([data, ...feedback])
    }

    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure')) {
            await fetch(`/feedback/${id}`, { method: 'DELETE' })
            
            setFeedback(feedback.filter((item) => item.id !== id)) // it'll repopulate our 
            //list only with the items that doesnt match our id
        }
    }

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem),
        })

        const data = await response.json()

        setFeedback(
            feedback.map(
                (item) => (item.id === id ? {...item, ...data} : item)
            )
        )
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }
    
    return (
        <FeedbackContext.Provider value={{
            feedback,
            addFeedback,
            deleteFeedback,
            feedbackEdit,
            editFeedback,
            updateFeedback,
            isLoading,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
};

export default FeedbackContext;