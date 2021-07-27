import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from 'axios';

function DayList(){
    const [days, setDays] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/days').then(res => {
            setDays(res.data);
            
        }).catch(e =>{
            console.log(e);
        })
    },[]);
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