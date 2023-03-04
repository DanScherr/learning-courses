import { useContext } from 'react'

/* import PropTypes from 'prop-types' */
import {motion, AnimatePresence} from 'framer-motion'

import FeedBackItem from "./FeedBackItem"

import FeedbackContext from '../context/FeedbackContex'

export default function FeedbackList( { /* feedback, */ /* handleDelete */ } ) {
    const { feedback } = useContext(FeedbackContext)


    if(!feedback || feedback.length === 0) {
        return <p>No Feedback yet</p>
    }
    
    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div 
                        key={item.id}
                        initial={{opacity: 0}} // double brackets cos we passing an obj
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        <FeedBackItem 
                            key={item.id} 
                            item={item} 
                            /* handleDelete= { handleDelete } */
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )

    /* return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedBackItem 
                    key={item.id} 
                    item={item} 
                    handleDelete= { handleDelete }
                />
            ))}
        </div>
    ) */
} 

/* FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
} */