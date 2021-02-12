import React, {Component} from 'react'
import Navbar from './Navbar'
import Main from './Main'
import './App.css'
import sha256 from 'crypto-js/sha256'
import ripemd160 from 'crypto-js/ripemd160'
import {Blowfish} from "javascript-blowfish";
const CryptoJS = require("crypto-js");
const NodeRSA = require('node-rsa');

class App extends Component {

    async componentWillMount() {
        fetch('http://localhost:9000/testAPI')
            .then(res => res.text())
            .then(res => this.setState({api: res}))
            .catch(err => err);
    }

    constructor(props) {
        super(props)
        this.state = {
            result:'None',
            loading: false,
            api:"",
            connected: {code:0, msg:'', email:'Not connected'}
        }
    }

    connect = (email, password) => {
        password = sha256(password).toString();
        fetch('http://localhost:9000/connect',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email, password: password})
            })
            .then(res => res.text())
            .then(res => {
                this.setState({connected: JSON.parse(res.toString())});
                this.render()
            })
            .catch(err => err);
    }

    md5 = (msg) => {
        const md5 = require('md5');
        this.setState({result: md5(msg)})
    }

    sha2 = (msg) => {
        this.setState({result: sha256(msg)})
    }

    sha3 = (msg) => {
        this.setState({result: CryptoJS.SHA3(msg, {outputLength: 512})})
    }

    keccak = (msg) => {
        const keccakHash = require('keccak')
        this.setState({result: keccakHash('keccak256').update(msg).digest('hex')})
    }

    ripemd = (msg) => {
        this.setState({result: ripemd160(msg)})
    }

    aes = (msg, key) => {
        this.setState({result: CryptoJS.AES.encrypt(msg, key).toString()})
    }
    aesDecrypt = (msg, key) => {
        let bytes = CryptoJS.AES.decrypt(msg, key)
        this.setState({result: bytes.toString(CryptoJS.enc.Utf8)})
    }

    rsa = (msg, key) => {
        key = new NodeRSA(key)
        this.setState({result: key.encrypt(msg, 'base64')})
    }
    rsaDecrypt = (msg, key) => {
        key = new NodeRSA(key)
        this.setState({result: key.decrypt(msg, 'utf8')})
    }

    blowFish = (msg, key) => {
        key = new Blowfish(key)
        this.setState({result: key.base64Encode(key.encrypt(msg))})
    }
    blowFishDecrypt = (msg, key) => {
        key = new Blowfish(key)
        this.setState({result: key.decrypt(key.base64Decode(msg))})
    }

    render() {
        let content
        if (this.state.loading) {
            content = <p id="loader" className="text-center">Loading...</p>
        } else {
            content = <Main
                result={this.state.result}
                api={this.state.api}
                connect={this.connect}
                md5={this.md5}
                sha2={this.sha2}
                sha3={this.sha3}
                keccak={this.keccak}
                ripemd={this.ripemd}
                aes={this.aes}
                aesDecrypt={this.aesDecrypt}
                rsa={this.rsa}
                rsaDecrypt={this.rsaDecrypt}
                blowFish={this.blowFish}
                blowFishDecrypt={this.blowFishDecrypt}
            />
        }

        return (
            <div>
                <Navbar connected={this.state.connected}/>
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
