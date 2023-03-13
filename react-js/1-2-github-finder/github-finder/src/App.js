import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
/** PAGES */
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import NotFound from "./components/pages/NotFound"
/** COMPONENTS */
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
/** Provider */
import { GithubProvider } from "./context/github/GithubContext"

export default function App() {
    return (
        <GithubProvider>
            <Router>
                <div className="flex flex-col justify-between h-screen">

                    <Navbar />

                    <main className="container mx-auto px-3 pb-12">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/notfound" element={<NotFound />} />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </Router>
        </GithubProvider>
    )
}