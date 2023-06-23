//@ts-check
import React from "react";
/** Components */
import Header from "../../components/catalog/shared/Header";

/** Style */
import './index.css'
import { Outlet } from "react-router-dom";

export default function Catalog(  ) {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}