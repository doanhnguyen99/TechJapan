import React, {Component} from 'react'
import './css/style.css'
// import {Link} from 'react-router-dom'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import TextInput from './TextInput'
import FileImport from './FileImport'
import HomePage from './HomePage'

class Home extends Component{
    render(){
        return(
            // <Router history = {browserHistory}>
            // <div>
            //     <ul>
            //         <li>
            //             <Link to="/">Home</Link>
            //         </li>
            //         <li>
            //             <Link to="/">Tẽ</Link>
            //         </li>
            //         <li><a href="#contact">Import File</a></li>
            //     </ul>
            // </div>
            // </Router>

            <Router>
                <div className="container">
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/text-input">Text Input</Link>
                            </li>

                            <li>
                                <Link to="/file-import">File Import</Link>
                            </li>
                        </ul>
                    </div>

                    <Switch>
                        <Route path="/text-input" component={TextInput} />
                        <Route path="/file-import" component={FileImport} />
                        <Route path="/" exact component={HomePage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Home;