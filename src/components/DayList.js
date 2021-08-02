import { Link } from "react-router-dom";
import React from "react";
import useGet from "../hooks/useGet";

function DayList(){
    const days = useGet('http://localhost:3001/days');

    if(days.length===0){
        return<span>Loading...</span>
    }
    
    return(
        <ul className = "list_day">
            {days.map(day => (
                <li key = {day.id}>
                    <Link to={`/day/${day.day}`}>
                    Day {day.day}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default DayList;