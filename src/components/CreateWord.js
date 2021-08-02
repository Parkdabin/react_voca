import React, { useRef, useState } from 'react'
import useGet from '../hooks/useGet';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CreateWord() {
    const days = useGet("http://localhost:3001/days")
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    
    function onSubmit(e){
        setIsLoading(true);
        e.preventDefault();
        if(!isLoading){
            axios.post(`http://localhost:3001/words/`, {
                day : dayRef.current.value,
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone : false
            }).then(res => {            
                if(res.statusText==='Created'){
                    alert('생성이 완료 되었습니다.');
                    history.push(`/day/${dayRef.current.value}`);
                    setIsLoading(false);
                }
            })

        }
    }
    
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    return (
        <form>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day =>(
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}                   
                </select>                
            </div>
            <button style={{opacity: isLoading ? 0.3 : 1}} onClick={onSubmit}>{isLoading ? "Saving..." : "저장"}</button>
        </form>
    );
}

export default CreateWord;