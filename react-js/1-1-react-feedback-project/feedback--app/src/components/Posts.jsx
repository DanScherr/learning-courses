import { useParams } from 'react-router-dom'

export default function Posts(  ) {
    const params = useParams()

    return (
        <div className='container'>
            <h1>Posts</h1>
            <p>Id: {params.id}</p>
            <p>Name: {params.name}</p>
        </div>
    )
}