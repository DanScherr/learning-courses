//@ts-check
import React, {lazy, Suspense} from "react";
/** Routes */
import { 
    Route,
    Routes
} from "react-router-dom";
/** Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";


/**Create lazy calls */
const Login = lazy(() => import("./pages/Login/index"))
const Catalog = lazy(() => import("./pages/catalog/index"))

export default function Router(  ) {

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Catalog />} />
                </Routes>
            </Suspense>
        </>
    )
}