import React from 'react'
import Header from "./Header";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import RoutingSwitch from "./RoutingSwitch";
import PostFormModal from "./PostFormModal";
import { useContext, useEffect } from "react";
import RedirectContext from "./RedirectContext";
import Authentication from "./Authentication";


function Routing() {

    const { redirect, setRedirect } = useContext(RedirectContext);
    useEffect(() => {
        if (redirect) {
            setRedirect(false);
        }
    }, [redirect]);

    return (
        <Router>
            {redirect && (
                <Redirect to={redirect} />
            )}
            {!redirect && (
                <>
                    <Header />
                    <RoutingSwitch />
                    <PostFormModal />
                    <Authentication />
                </>
            )}
        </Router>
    );
}

export default Routing;