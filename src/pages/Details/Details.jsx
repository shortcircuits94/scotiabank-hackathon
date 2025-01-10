import React from "react";
import { useParams } from "react-router-dom";
import BottomDetails from "../../components/BottomDetails/BottomDetails.jsx"
import "./Details.scss";
import TopDetails from "../../components/Top Details/TopDetails.jsx";


function Details () {

    const { id } = useParams();

    return (
        <>
        <TopDetails id={id} />
        <BottomDetails id={id} />
        </>
    );
}

export default Details;