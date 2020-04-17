import React from "react";
import { render } from "react-dom";
import Component from "./component";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const arr = [
    { value:'a0', text:'name' },
    { value:'a1', text:'address' },
]
const arr1 = [
    { value:'k0', text:'Kite' },
    { value:'a1', text:'address' },
    { value:'a2', text:'city' },
    { value:'a3', text:'gender' },
    { value:'a4', text:'country' },
]


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data:arr
        }
        setTimeout(()=>{
            this.setState({data:arr1})
        },3500)

    }

    render(){
        return (
          <div >
            <Component data={this.state.data}
                       //selectedList={arr}
                       onChange={(data)=>console.log(data)} />
          </div>
        );
    }
}

/*const App = () => (
  <div style={styles}>
    <Component data={arr} onChange={console.log} />
  </div>
);*/

render(<App />, document.querySelector(".root"));
