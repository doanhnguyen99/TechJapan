import React, {Component} from 'react'
import './css/style.css'
import { Form } from 'react-bootstrap';

class FileImport extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">Text Input</a></li>
                    <li><a href="#contact">Import File</a></li>
                </ul>

                <div className="title-text">
                    <h3>CHỌN FILE ĐỂ DỰ ĐOÁN</h3>
                </div>

                <div className="container">
                    <div className="row text-input">
                        <form action="" method="">
                            {/* <input type="file" /> */}
                            <Form>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" label="Import file input" />
                                </Form.Group>
                            </Form>
                            <br></br>
                            <button className="button">Dự đoán</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default FileImport;