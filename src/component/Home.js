import React, {Component} from 'react'
import './css/style.css'

class Home extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href={"/TextInput"}>Text Input</a></li>
                    <li><a href="#contact">Import File</a></li>
                </ul>
            </div>
        );
    }
}

export default Home;