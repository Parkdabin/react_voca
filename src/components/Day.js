import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useGet from '../hooks/useGet';
import Word from './Word';

function Day() {
    const { day } = useParams();
    const words = useGet(`http://localhost:3001/words?day=${day}`);
    const days = useGet(`http://localhost:3001/days`);

    return (
        <>
            <h2>Day {day}</h2>
            <div className="pagemove">
                <Link to={Number(day)===1 ? `/day/${days.length}` :`/day/${day-1}`}>이전 날짜</Link>
                <Link to={days.length===Number(day) ?  `/day/1`: `/day/${Number(day)+1}`}>다음 날짜</Link>
            </div>
            {words.length===0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}

                </tbody>
            </table>
        </>
    );
}

export default Day;