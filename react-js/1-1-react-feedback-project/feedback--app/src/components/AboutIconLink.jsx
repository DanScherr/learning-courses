import { FaQuestion } from 'react-icons/fa' // font awsome
import { Link } from 'react-router-dom'

export default function AboutIconLink( {size} ) {
    return (
        <div className="about-link">
            <Link to="/about">
                <FaQuestion size={size} />
            </Link>
        </div>
    )
}