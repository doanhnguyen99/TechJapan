import { computeHeadingLevel } from '@testing-library/react';
import React, {Component} from 'react'
import './css/style.css'

class TextInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: '',
            predictResult: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // handleSubmit(data){
    //     debugger
    //     fetch('http://127.0.0.1:5000/textjson', {
    //         method: 'POST',
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             textarea: this.text
    //         }),
    //     }).then(response => {
    //         if (response.status >= 200 && response.status < 300) {
    //             console.log(response);
    //             return response;
    //           } else {
    //            console.log('Somthing happened wrong');
    //           }
    //     }).catch(err => err);
    // };

    handleChange(event) {
        this.setState({data: event.target.value});
      }

    handleSubmit = (event) => {
        fetch('http://127.0.0.1:5000/textjson', {
            
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: this.state.data
            })
        })
        .then((response) => response.json())
        .then(result => {
            console.log(result.result)
            this.setState({
                predictResult: result.result
            });
        });
    }

    render(){
        return(
            <div>
                <div className="title-text">
                    <h3>NHẬP VĂN BẢN ĐỂ DỰ ĐOÁN</h3>
                </div>

                <div className="container">
                    <div className="row text-input">
                        <textarea cols="100" value={this.state.data} onChange={this.handleChange} placeholder="Nhập text vào đây!!!"></textarea>
                        <br></br>
                    </div>
                    <div className="text-input-button" >
                        <button onClick={this.handleSubmit} className="button">Dự đoán</button>
                    </div>
                   <div>
                        <h3 className="title-text">Kết quả: <h2>{this.state.predictResult}</h2></h3>
                   </div>
                </div>
            </div>
        );
    }
}

export default TextInput;