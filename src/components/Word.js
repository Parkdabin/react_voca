import React, { useState } from 'react';
import axios from 'axios';


function Word({word :w}) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone(){
        axios.put(`http://localhost:3001/words/${word.id}`, {
            ...word,
            isDone: !isDone,
        }).then(res => {
            if(res.statusText==='OK'){
                setIsDone(!isDone);
            }
        })
    }
    function del(){
        if(window.confirm('삭제 하시겠습니까?')){
            axios.delete(`http://localhost:3001/words/${word.id}`).then(res => {
                if(res.statusText==='OK'){
                    setWord({id:0})
                }
                
            })
        }
    }
    if(word.id===0){
        return null;
    }

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
                <button className="btn_del" onClick ={del}>삭제</button>
            </td>
        </tr>
    );
}

export default Word;