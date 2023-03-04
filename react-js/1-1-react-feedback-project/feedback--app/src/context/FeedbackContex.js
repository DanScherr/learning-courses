import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const[feedback, setFeedback] = useState([{
        id: '1',
        text: 'This item is from context',
        rating: 10,
    }])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {}, // by default it's going to be empty
        edit: false, // so that when we click it it'll be set to true

    })

    const addFeedback = ( newFeedback ) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        console.log(newFeedback)
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure')) {
            setFeedback(feedback.filter((item) => item.id !== id)) // it'll repopulate our 
            //list only with the items that doesnt match our id
        }
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map(
                (item) => (item.id === id ? {...item, ...updItem} : item)
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
        }}>
            {children}
        </FeedbackContext.Provider>
    )
};

export default FeedbackContext;