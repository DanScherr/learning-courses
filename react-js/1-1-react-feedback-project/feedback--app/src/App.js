/** Libs */
/* import { useState } from "react" */
/* import { v4 as uuidv4 } from 'uuid' */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
/** Components */
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
/* import FeedbackData from "./data/FeedbackData" */
import FeedbackForm from "./components/FeedbackForm"
/** Pages */
import AboutPage from "./pages/AboutPage"
import Posts from "./components/Posts"
/** Providers */
import { FeedbackProvider } from "./context/FeedbackContex"


export default function App( ) {
    /* const [feedback, setFeedback] = useState(FeedbackData) */

    /* const addFeedback = ( newFeedback ) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        console.log(newFeedback)
    } */

    /* const deleteFeedback = (id) => {
        if(window.confirm('Are you sure')) {
            setFeedback(feedback.filter((item) => item.id !== id)) // it'll repopulate our 
            //list only with the items that doesnt match our id
        }
    } */

    return (
        <FeedbackProvider>
            <Router>
                <Header /* bgColor='red' textColor='blue' */ />
                <div className="container">
                    <Routes>
                        <Route exac path="/" element={
                            <>
                                <FeedbackForm /* handleAdd={addFeedback} *//>
                                <FeedbackStats /* feedback={feedback} */ />
                                <FeedbackList /* feedback={feedback} */ /* handleDelete={deleteFeedback} */ />
                            </>
                        } />
                        <Route path="/about/*" element={<AboutPage />} />
                        <Route path="/post/:id/:name" element={<Posts />} />

                    </Routes>
                    <div className="footer">
                        <NavLink to='/' activeClassName='active' className='NavLink'>Home</NavLink>
                        <NavLink to='/about' activeClassName='active' className='NavLink'>About</NavLink>
                        <NavLink to='/post' activeClassName='active' className='NavLink'>Posts</NavLink>
                    </div>
                </div>
            </Router>
        </FeedbackProvider>
    )
}