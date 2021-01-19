import React from 'react';
import PropTypes from 'prop-types';

//함수형 컴포넌트 선언.
/*
const MyComponentFunction = ()=> {
    return <div>My Comoponent Start</div>;
};*/


//프로퍼티 사용법 JSX 내부에 props 렌더링 -> ES6 화살표 함수 사용.
/*
const MyComponentFunction = props => {
    return (
        <div>
            hello, My Name is {props.name} <br/>
            children 값은 { props.children} 
        </div>
    );
};

MyComponentFunction.defaultProps = {
    name : '기본이름'
}

export default MyComponentFunction;
MyComponentFunction.prototypes = { 
    name : PropTypes.string
};
*/



//ES6 함수의 파라미터 객체 비구조화 할당 

// const MyComponentFunction = {(name, children)} => {
//     return ( 

//         <div>안녕하세요 제 이름은 {name}입니다.
//         children 값은 {children} 입니다.       
//         </div>
//     );
// };

// MyComponentFunction.defaultProps = {
//     name : '기본이름'
// };

// export default MyComponentFunction;




//ES6 비구조화 할당 - 객체의 값 추출
// const MyComponentFunction = props => {
//     const { name , children } = props;

//     return (
//         <div>안녕하세요 제 이름은 {name}입니다.
//         children 값은 {children} 입니다.
//         </div>
//     );
// };

// MyComponentFunction.defaultProps = {
//     name : '기본이름'
// }

// MyComponentFunction.prototypes = { 
//     name : PropTypes.string
// };

// export default MyComponentFunction;



// 필수 propTypes 설정
const MyComponentFunction = ({name,favoriteNumber,children}) =>{
    return (

        <div>
            안녕하세요, 제 이름은 {name} 입니다.<br/>
            children 값은 {children} 입니다. <br/>
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    )
};

MyComponentFunction.defaultProps = {
    name : '기본이름'
}
MyComponentFunction.prototypes = {
    name : PropTypes.string,
    favoriteNumber:PropTypes.number.isRequired
};
export default MyComponentFunction;