import { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import FeedbackContext from "../context/FeedbackContex"

import RatingSelect from "./RatingSelect"

export default function FeedbackForm( /* {handleAdd} */ ) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === '') {
            setMessage(null)
            setBtnDisabled(true)
        } else if(text !== '' && (text.trim().length + 1) <= 10) {
            setMessage('Text must be at least 10 characters..')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault() // prevent the user to send the default behaviour
        if(text.trim().length > 10) {
            const newFeedback = {
                text, // another/simpler way of saying text: text
                rating
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
                setBtnDisabled(true)
            } else {
                addFeedback(newFeedback)
                setBtnDisabled(true)
                
            }
        }
        setMessage('Text must be at least 10 characters..')
        setBtnDisabled(true)
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input  onChange={handleTextChange}
                            onSelect={handleTextChange}
                            type="text" 
                            placeholder="Write a review"
                            value={text} 
                    />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}