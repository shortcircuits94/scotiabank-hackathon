import React from "react";
import { useParams } from "react-router-dom";
import BottomDetails from "../../BottomDetails/BottomDetails.jsx"


function Details () {

    const { id } = useParams();

    return (
        <>
        <BottomDetails id={id} />
        </>
    );
}

export default Details;