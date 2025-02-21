import React,{Component} from "react";

// class Example extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             count:0
//         }
//     }
// }
class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0
         };
    }
    componentDidMount(){
        console.log(`componentDidMount=>you clicked ${this.state.count} times.`)
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate=>you clicked ${this.state.count} times.`)
    }
    render() {
        return (
            <div> 
            <p>click {this.state.count} </p>
            <button onClick={this.addCount.bind(this)}>click me</button>
            </div>
        );
    }
    addCount(){
        this.setState({count:this.state.count+1})
    }
}

export default Example;