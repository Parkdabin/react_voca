import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useGet from '../hooks/useGet';
import Word from './Word';

function Day() {
    const {day} = useParams();
    const words = useGet(`http://localhost:3001/words?day=${day}`);
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