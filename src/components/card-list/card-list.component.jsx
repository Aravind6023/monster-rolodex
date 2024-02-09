import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card.component";

export const CardList = prop =>
{
    return(
        <div className="card-list">
          {prop.monsters.map(nam => 
          <Card key={nam.id} names={nam}></Card>
          )}
        </div>
    )
}