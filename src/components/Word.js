import React, { useState } from 'react';

function Word({word}) {
    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone(){
        setIsDone(!isDone);
    }
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);


    return (
        <tr className={isDone ? "off" : ''}>
            <td>
                <input type="checkbox" checked={isDone}
                onChange={toggleDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? '숨기기': '보기'}</button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    );
}

export default Word;