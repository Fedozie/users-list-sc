import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/button";
import DataContext from "../context/dataContext";


const TrialPage = () => {
    const { list } = useContext(DataContext);
    const navigate = useNavigate();

    return (
        <>
            <ul>
                {
                    list.map((user) => (
                        <li key = {user.id}>
                            {user.name}
                        </li>
                    ))
                }
            </ul>

            <Button onClick={() => navigate("/")}>Go to Home Page</Button>
        </>
    )
}

export default TrialPage;