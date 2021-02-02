import React, {Component} from 'react'
import Navbar from './Navbar'
import Main from './Main'
import './App.css'

class App extends Component {

    async componentWillMount() {
    }

    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    md5 = (msg) => {
        const md5 = require('md5');
        alert(md5(msg))
    }


    render() {
        let content
        if (this.state.loading) {
            content = <p id="loader" className="text-center">Loading...</p>
        } else {
            content = <Main
                md5={this.md5}
            />
        }

        return (
            <div>
                <Navbar/>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <main role="main" className="col-lg-12 ml-auto mr-auto" style={{maxWidth: '600px'}}>
                            <div className="content mr-auto ml-auto">
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                </a>

                                {content}

                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
