import React from 'react';

//함수형 컴포넌트 선언.
/*
const MyComponent = ()=> {
    return <div>My Comoponent Start</div>;
};*/


//프로퍼티 사용법 JSX 내부에 props 렌더링 -> ES6 화살표 함수 사용.
/*
const MyComponent = props => {
    return (
        <div>
            hello, My Name is {props.name} <br/>
            children 값은 { props.children} 
        </div>
    );
};

MyComponent.defaultProps = {
    name : '기본이름'
}
*/

//ES6 비구조화 할당 - 객체의 값 추출
const MyComponent = props => {
    const { name , children } = props;

    return (
        <div>안녕하세요 제 이름은 {name}입니다.
        children 값은 {children} 입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name : '기본이름'
}
export default MyComponent;



//ES6 함수의 파라미터 객체 비구조화 할당 

// const MyComponent = {(name, children)} => {
//     return ( 

//         <div>안녕하세요 제 이름은 {name}입니다.
//         children 값은 {children} 입니다.       
//         </div>
//     );
// };

// MyComponent.defaultProps = {
//     name : '기본이름'
// };

// export default MyComponent;

