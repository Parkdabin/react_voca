import React from 'react';
import { useHistory } from 'react-router-dom';
import useGet from '../hooks/useGet';
import axios from 'axios';

function CreateDay(){
    const days = useGet("http://localhost:3001/days");
    const history = useHistory();
    function addDay(e){
        e.preventDefault();        
        axios.post(`http://localhost:3001/days`, {
            day : days.length + 1,            
        }).then(res => {            
            if(res.statusText==='Created'){
                alert('생성이 완료 되었습니다.');
                history.push(`/`);
            }
        })
    }
    function delDay(e){
        e.preventDefault();
        axios.delete(`http://localhost:3001/days/${days.length}`).then(res => {
            console.log(res.statusText);
            if(res.statusText==='OK'){
                alert('삭제가 완료 되었습니다.');
                history.push(`/`);
            }
            else{
                alert('삭제할 날짜가 없습니다.');
                history.push(`/`);
            }
        })

    }

    return(
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
            <button style={{marginLeft : 10}} onClick={delDay}>Day 삭제</button>
        </div>
    );
}

export default CreateDay;