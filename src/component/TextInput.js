import React, {Component} from 'react'
import './css/style.css'

class TextInput extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">Text Input</a></li>
                    <li><a href="#contact">Import File</a></li>
                </ul>

                <div className="title-text">
                    <h3>NHẬP VĂN BẢN ĐỂ DỰ ĐOÁN</h3>
                </div>

                <div className="container">
                    <div className="row text-input">
                        <form action="" method="">
                            <textarea cols="100" placeholder="Nhập text vào đây!!!"></textarea>
                            <br></br>
                            <button className="button">Dự đoán</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default TextInput;