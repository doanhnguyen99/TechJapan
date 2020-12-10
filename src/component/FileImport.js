import React, {Component} from 'react'
import './css/style.css'
import { Form, Button } from 'react-bootstrap';

class FileImport extends Component{
    constructor(props){
        super(props);
        this.state = {
            predictResult: ''
        }
    }

    render(){
        return(
            <div>
                <div className="title-text">
                    <h3>CHỌN FILE ĐỂ DỰ ĐOÁN</h3>
                </div>

                <div className="container">
                    <div className="row text-input">
                            <Form onSubmit={(data)=>{
                                console.log(data.target.file.files[0]);
                                
                                fetch('http://127.0.0.1:5000/filejson', {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "multipart/form-data",
                                        "Accept": "multipart/form-data"
                                        // "type": "formData"
                                
                                    },
                                    body: {file: data.target.file.files[0]}
                                }).then(response => response.json()
                                    ).then(result => {
                                        console.log(result.result)
                                        this.setState({
                                            predictResult: result.result
                                        });
                                    }
                                    );
                                    data.preventDefault();
                            }}>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1"  name="file"  label="Chọn file...." />
                                </Form.Group>
                                    <button className="button" type="submit">Dự đoán</button>
                            </Form>
                            <br></br>
                           
                            <h3 className="title-text">Kết quả: <h2>{this.state.predictResult}</h2></h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default FileImport;