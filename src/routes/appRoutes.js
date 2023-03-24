import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import UserPage from "../pages/users/userPage";
import TrialPage from "../pages/trialPage";


const AppRoutes = () => {
    return(
        <>
            <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<UserPage/>}/>
                <Route path = "/trial" element = {<TrialPage/>}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;