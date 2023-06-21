//@ts-check
import React, {lazy, Suspense} from "react";
/** Routes */
import { 
    Navigate,
    Route,
    Routes
} from "react-router-dom";
/** Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
/** PDF Viwer */
import { PDFViewer } from "@react-pdf/renderer";


/**Create lazy calls */
const Login = lazy(() => import("./pages/Login/index"))
const Catalog = lazy(() => import("./pages/catalog/index"))
const Home = lazy(() => import("./pages/Home/index"))
const Book = lazy(() => import("./pages/book/index"))

export default function Router(  ) {

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/" element={<Catalog />} >
                        <Route path="/home" element={<Home/>} />
                    </Route>
                    <Route path="/book" element={<Book/>} />
                </Routes>
            </Suspense>
        </>
    )
}