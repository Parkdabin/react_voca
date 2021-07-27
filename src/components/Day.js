import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Word from './Word';

function Day() {
    const {day} = useParams();
    const [words, setWords] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3001/words?day=${day}`).then(res => setWords(res.data))
        .catch(e => console.log(e));
    },[day])
    return (
        <>
        <h2>Day {day}</h2>
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