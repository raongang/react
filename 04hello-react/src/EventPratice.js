import React, {Component} from 'react'

class EventPratice extends Component{

    state = {
        message : ''
    }

    


    render() {
        return (
            <div>
               <h1>event EventPratice</h1> 
               <input   type="text" 
                        name="message" 
                        placeholder="아무거나입력.." 
                        value={this.state.message}
                        // onChange = { (e) => {
                        //         console.log(e.target.value);
                        //         this.setState({ message : e.target.value }) 
                        //         //this.setState(prevState => ({ message : e.target.value})); 위와 동일
                        //     }
                        // }
                />

                <button onClick= { () => { 
                    alert(this.state.message);
                    this.setState({message: ''});
                }}>확인
                </button>
            </div>
        );
    }
}

export default EventPratice;



