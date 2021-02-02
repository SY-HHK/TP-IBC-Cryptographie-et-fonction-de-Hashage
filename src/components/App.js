import React, {Component} from 'react'
import Navbar from './Navbar'
import Main from './Main'
import './App.css'
import sha256 from 'crypto-js/sha256'
import sha3 from 'crypto-js/sha3'
import ripemd160 from 'crypto-js/ripemd160'
import AES from 'crypto-js/aes'
const CryptoJS = require("crypto-js");
const NodeRSA = require('node-rsa');

class App extends Component {

    async componentWillMount() {
    }

    constructor(props) {
        super(props)
        this.state = {
            result:'None',
            loading: false
        }
    }

    md5 = (msg) => {
        const md5 = require('md5');
        alert(md5(msg))
    }

    sha2 = (msg) => {
        alert(sha256(msg))
    }

    sha3 = (msg) => {
        alert(sha3(msg))
    }

    keccak = (msg) => {
        const keccakHash = require('keccak')
        alert(keccakHash('keccak256').update(msg).digest('hex'))
    }

    ripemd = (msg) => {
        alert(ripemd160(msg))
    }

    aes = (msg, key) => {
        alert(CryptoJS.AES.encrypt(msg, key).toString())
    }

    rsa = (msg, key) => {
        key = new NodeRSA(key)
        this.setState({result: key.encrypt(msg, 'base64')})
    }
    rsaDecrypt = (msg, key) => {
        key = new NodeRSA(key)
        this.setState({result: key.decrypt(msg, 'utf8')})
    }

    render() {
        let content
        if (this.state.loading) {
            content = <p id="loader" className="text-center">Loading...</p>
        } else {
            content = <Main
                result={this.state.result}
                md5={this.md5}
                sha2={this.sha2}
                sha3={this.sha3}
                keccak={this.keccak}
                ripemd={this.ripemd}
                aes={this.aes}
                rsa={this.rsa}
                rsaDecrypt={this.rsaDecrypt}
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
