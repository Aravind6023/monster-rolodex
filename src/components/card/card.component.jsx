import React from "react";
import "./card.style.css";

export const Card = prop => 
{
    return(
        <div className="card-container">
            <img className="card-image" alt="Error Loading" src={`https://robohash.org/${prop.names.id}?set=set2`} />
            <h3 key={prop.names.id}>{prop.names.name}</h3>
            <h5>{prop.names.email}</h5>
        </div>
    )
}