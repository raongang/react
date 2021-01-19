import React, {useState} from 'react';


/** 함수형 컴포넌트에서 Hooks의 하나인 useState사용하기. */



const Say = () => {

    //배열의 첫번째 인자 : 상태, 두번째 : 상태를 바꾸어주는 함수.
    const[message, setMessage] = useState('');
    const onClickEnter= () => setMessage('hello');
    const onClickLeave= (function(){
        setMessage('good Bye')
    });

    const[color, setColor] = useState('black');


    return ( 
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            
            <button style={{color:'red'}} onClick={()=> setColor('red')}>빨간색</button>
            <button style={{color:'green'}} onClick = { () => setColor('green')}>그린</button>
            <button style={{color:'blue'}} onClick = { () => setColor('blue')}>파란</button>


        </div>
    );
};


export default Say;
