import React, { Component } from 'react';

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['腳底按摩','指壓']
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
                    <button onClick={this.addList.bind(this)}> 增加服務</button>

                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li key={index+item}>{item}</li>
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