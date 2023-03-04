import { useContext } from 'react'
/* import PropTypes from 'prop-types' */
import FeedbackContext from '../context/FeedbackContex'

export default function FeedbackStats( /* {feedback} */ ) {
    const { feedback } = useContext(FeedbackContext)

    // calculate avarage ratings
    let avarage = ( 
        feedback.reduce(( acc, cur ) => {
            return ( acc + cur.rating )
        }, 0) 
        / feedback.length 
    )

    avarage = avarage.toFixed(1).replace(/[.,]0$/, '') // one decimal place only without right zeros

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length}  Reviews</h4>
            <h4>Avarage Rating: {isNaN(avarage) ? 0 : avarage}</h4>
        </div>
    )
}

/* FeedbackStats.prototype = {
    feedback: PropTypes.array.isRequired,
} */