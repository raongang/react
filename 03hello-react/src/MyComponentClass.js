import React, {Component} from 'react';
import PropTypes from 'prop-types';

//클래스형 컴포넌트
class MyComponentClass extends Component{


    static defaultProps = {
        name : '기본 이름'
    };

    static propTypes = {
        name :  this.prototype.string,
        favoriteNumber:PropTypes.number.isRequired
    };

    render(){
        console.log(this);
        const { name, favoriteNumber, children} = this.props; //비구조화 할당

        return (
            <div>
            안녕하세요, 제 이름은 {name} 입니다.<br/>
            children 값은 {children} 입니다. <br/>
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        );
    }
}

/*
MyComponentClass.defaultProps = {
    name : '기본이름'
}
MyComponentClass.prototypes = {
    name : PropTypes.string,
    favoriteNumber:PropTypes.number.isRequired
};
*/

export default MyComponentClass;