import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
/** PAGES */
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import NotFound from "./components/pages/NotFound"
/** COMPONENTS */
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Alert from "./components/layout/Alert"
import Users from "./components/pages/Users"
/** Provider */
import { GithubProvider } from "./context/github/GithubContext"
import { AlertProvider } from "./context/alert/AlertContext"


export default function App() {
    return (
        <GithubProvider>
            <AlertProvider>
            <Router>
                <div className="flex flex-col justify-between h-screen">

                    <Navbar />

                    <main className="container mx-auto px-3 pb-12">
                        <Alert />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/user/:login" element={<Users />} />
                            <Route path="/notfound" element={<NotFound />} />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </Router>
            </AlertProvider>
        </GithubProvider>
    )
}