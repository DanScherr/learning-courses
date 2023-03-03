import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"

export default function FeedBackItem( {item, handleDelete} ) {
    /* const [rating, setRating] = useState(7) // 7 is default // rating = values // setRating = function
    const [feedback, setFeedback] = useState(
        'This is an example of a feedback item.'
    )

    const handleClick = () => {
        setRating( ( previous ) => {
            return previous + 1
        })
    } */

    return (
        <Card /* reverse='reverse' */>
            <div className="num-display">{item.rating}</div>
            <button 
                onClick={() => handleDelete(item.id)} 
                className='close'>
                    <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedBackItem.prototype = {
    item: PropTypes.object.isRequired,
}