import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Card from "../components/shared/Card"

export default function AboutPage(  ) {
    const status = 200 // we would get that from an api request

    const navigate = useNavigate()

    const onClick = () => {
        console.log('doing something')
        navigate('/post/666/youUsedNavigate')
    }

    if (status === 404) {
        return <Navigate to='/notfound' />
    }
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>This is a React app to leave a feedback for a product or a service.</p>
                <p>Version: 1.0.0</p>
            </div>
            
            <div>
                <button onClick={onClick}>Testing useNavigate</button>
            </div>

            <Routes>
                <Route path="/show" element={<h1>Hello world!</h1>} />
            </Routes>
        </Card>
    )
}