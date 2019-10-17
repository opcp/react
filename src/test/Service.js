import React, { Component } from 'react';

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: [
            {id: 1, text:'buy iphone 11'},
            {id: 2, text:'learn react'},
        ]
        };
    }
    render() {
        return (
            <>
                <div>
                    <input 
                    value={this.state.inputValue} 
                    onChange={this.inputChange.bind(this)}
                    /> 
                    <button onClick={this.addList.bind(this)}>增加服務</button>

                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li key={item.id}> {item.text} </li>
                        })
                    }
                </ul>

            </>
        );
    }

    inputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }

    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
}

export default Service;
