import React, {Component} from 'react';
/*  
    state - component 내부에서 바뀔 수 있는 값.
          - props는 컴포넌트 자신은 읽기만 가능 ( MyComponent에서 props은 읽기만 가능하며, 수정할려면 이를 사용하는 부모 컴포넌트인 App에서 props를 바꾸어야 값이 수정된다.)

    종류 : 클래스형 컴포넌트가 지니고 있는 state , 함수형 컴포넌트에서 useState라는 함수를 통해 사용하는 state
*/


class Counter extends Component{
    /*
    //초기값설정1.
    constructor(props){
        //super 필수
        super(props);
        //state초기값 설정
        this.state = { 
            number : 0 ,
            fixedNumber : 0
        
        }; //객체리터럴로 변수에 값 주기.
    }*/

    //초기값 설정2
    state = { 
        number:0,
        fixedNumber:0
    }

    //render 필수
    render(){
        //객체 비구조화 - state를 조회할때
        const { number, fixedNumber } = this.state;
    
        return( 
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber} </h2>
                <button
                    onClick = { ()=> {
                        //this.setState({ number : number +1});
                        // this.setState(function(prevState,props){
                        //     return { number : prevState.number + 1 };
                        // });

                        this.setState( (prevState) => {
                            return {number:prevState.number+1};
                        }, //setState이후 특정작업 실행. - callback function.
                            () => {
                                console.log("방금 setState가 호출되었습니다.");
                                console.log(this.state);
                            }
                        );                        

                        // //화살표 함수의 선언방법. ( 바로 return하고 싶을때)
                        // this.setState(prevState => ({
                        //     number : prevState.number+1
                        // }));


                    } 
                }

                >+1
                </button>
            </div>
        );
    }
}

export default Counter;

