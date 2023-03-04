import { FaHome } from 'react-icons/fa' // font awsome
import { Link } from 'react-router-dom'

export default function HomeIconLink(  ) {
    return (
        <div className="about-link">
            <Link to="/">
                <FaHome size={20} />
            </Link>
        </div>
    )
}