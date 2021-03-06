import React, {Component} from 'react'

class Main extends Component {

    render() {
        return (
            <div id="content" className="mt-3">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#md5"
                           role="tab" aria-controls="pills-profile" aria-selected="false">MD5</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#sha2"
                           role="tab" aria-controls="pills-profile" aria-selected="false">SHA2</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#sha3"
                           role="tab" aria-controls="pills-profile" aria-selected="false">SHA3</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#keccak"
                           role="tab" aria-controls="pills-profile" aria-selected="false">KECCAK</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#ripemd"
                           role="tab" aria-controls="pills-profile" aria-selected="false">RIPEMD</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#aes"
                           role="tab" aria-controls="pills-profile" aria-selected="false">AES</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#rsa"
                           role="tab" aria-controls="pills-profile" aria-selected="false">RSA</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#blowfish"
                           role="tab" aria-controls="pills-profile" aria-selected="false">Blowfish</a>
                    </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">

                    <div className="tab-pane fade" id="md5" role="tabpanel"
                         aria-labelledby="pills-profile-tab">
                        <form className="mb-3" onSubmit={(event) => {
                            event.preventDefault()
                            let msg
                            msg = this.msgMD5.value.toString()
                            this.props.md5(msg)
                        }}>
                            <div>
                                <label className="float-left"><b>Hash a message in md5</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msgMD5) => {
                                        this.msgMD5 = msgMD5
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter msg"
                                    required/>
                                <div className="input-group-append">
                                    <div className="input-text">
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Hash!</button>
                        </form>
                    </div>

                    <div className="tab-pane fade" id="sha2" role="tabpanel"
                         aria-labelledby="pills-profile-tab">
                        <form className="mb-3" onSubmit={(event) => {
                            event.preventDefault()
                            let msg
                            msg = this.msgSHA2.value.toString()
                            this.props.sha2(msg)
                        }}>
                            <div>
                                <label className="float-left"><b>Hash a message in SHA2-256</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msgSHA2) => {
                                        this.msgSHA2 = msgSHA2
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter msg"
                                    required/>
                                <div className="input-group-append">
                                    <div className="input-text">
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Hash!</button>
                        </form>
                    </div>

                    <div className="tab-pane fade" id="sha3" role="tabpanel"
                         aria-labelledby="pills-profile-tab">
                        <form className="mb-3" onSubmit={(event) => {
                            event.preventDefault()
                            let msg
                            msg = this.msgSHA3.value.toString()
                            this.props.sha3(msg)
                        }}>
                            <div>
                                <label className="float-left"><b>Hash a message in SHA3-512</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msgSHA3) => {
                                        this.msgSHA3 = msgSHA3
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter msg"
                                    required/>
                                <div className="input-group-append">
                                    <div className="input-text">
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Hash!</button>
                        </form>
                    </div>

                    <div className="tab-pane fade" id="keccak" role="tabpanel"
                         aria-labelledby="pills-profile-tab">
                        <form className="mb-3" onSubmit={(event) => {
                            event.preventDefault()
                            let msg
                            msg = this.msgKeccak.value.toString()
                            this.props.keccak(msg)
                        }}>
                            <div>
                                <label className="float-left"><b>Hash a message in Keccak-512</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msgKeccak) => {
                                        this.msgKeccak = msgKeccak
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter msg"
                                    required/>
                                <div className="input-group-append">
                                    <div className="input-text">
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Hash!</button>
                        </form>
                    </div>

                    <div className="tab-pane fade" id="ripemd" role="tabpanel"
                         aria-labelledby="pills-profile-tab">
                        <form className="mb-3" onSubmit={(event) => {
                            event.preventDefault()
                            let msg
                            msg = this.msgRipeMd.value.toString()
                            this.props.ripemd(msg)
                        }}>
                            <div>
                                <label className="float-left"><b>Hash a message in RipeMD160</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msgRipeMd) => {
                                        this.msgRipeMd = msgRipeMd
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter msg"
                                    required/>
                                <div className="input-group-append">
                                    <div className="input-text">
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Hash!</button>
                        </form>
                    </div>

                    <div className="tab-pane fade" id="aes" role="tabpanel"
                         aria-labelledby="pills-profile-tab">
                        <form className="mb-3" onSubmit={(event) => {
                            event.preventDefault()
                            let msg, key
                            msg = this.msgAES.value.toString()
                            key = this.keyAES.value.toString()
                            this.props.aes(msg, key)
                        }}>
                            <div>
                                <label className="float-left"><b>Encrypt a message in AES</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msgAES) => {
                                        this.msgAES = msgAES
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter msg"
                                    required/>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(keyAES) => {
                                        this.keyAES = keyAES
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter key"
                                    required/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Encrypt!</button>
                        </form>

                        <form className="mb-3" onSubmit={(event) => {
                            event.preventDefault()
                            let msg, key
                            msg = this.msgAESDecrypt.value.toString()
                            key = this.keyAESDecrypt.value.toString()
                            this.props.aesDecrypt(msg, key)
                        }}>
                            <div>
                                <label className="float-left"><b>Decrypt a message in AES</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msgAESDecrypt) => {
                                        this.msgAESDecrypt = msgAESDecrypt
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter msg"
                                    required/>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(keyAESDecrypt) => {
                                        this.keyAESDecrypt = keyAESDecrypt
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter key"
                                    required/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Decrypt!</button>
                        </form>
                    </div>

                    <div className="tab-pane fade" id="rsa" role="tabpanel"
                         aria-labelledby="pills-profile-tab">
                        <form className="mb-3" onSubmit={(event) => {
                            event.preventDefault()
                            let msg, key
                            msg = this.msgRsaEncrypt.value.toString()
                            key = this.keyRsaEncrypt.value.toString()
                            this.props.rsa(msg, key)
                        }}>
                            <div>
                                <label className="float-left"><b>Encrypt a message in RSA</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msgRsaEncrypt) => {
                                        this.msgRsaEncrypt = msgRsaEncrypt
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter msg"
                                    required/>
                            </div>
                            <div className="input-group mb-4">
                                <textarea
                                    ref={(keyRsaEncrypt) => {
                                        this.keyRsaEncrypt = keyRsaEncrypt
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter private key"
                                    required>

                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Encrypt!</button>
                        </form>

                        <form className="mb-3" onSubmit={(event) => {
                            event.preventDefault()
                            let msg, key
                            msg = this.msgRsaDecrypt.value.toString()
                            key = this.keyRsaDecrypt.value.toString()
                            this.props.rsaDecrypt(msg, key)
                        }}>
                            <div>
                                <label className="float-left"><b>Decrypt a message in RSA</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <textarea
                                    type="text"
                                    ref={(msgRsaDecrypt) => {
                                        this.msgRsaDecrypt = msgRsaDecrypt
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter msg"
                                    required>

                                </textarea>
                            </div>
                            <div className="input-group mb-4">
                                <textarea
                                    ref={(keyRsaDecrypt) => {
                                        this.keyRsaDecrypt = keyRsaDecrypt
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter private key"
                                    required>

                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Decrypt!</button>
                        </form>
                    </div>

                    <div className="tab-pane fade" id="blowfish" role="tabpanel"
                         aria-labelledby="pills-profile-tab">
                        <form className="mb-3" onSubmit={(event) => {
                            event.preventDefault()
                            let msg, key
                            msg = this.msgBlowfishEncrypt.value.toString()
                            key = this.keyBlowfishEncrypt.value.toString()
                            this.props.blowFish(msg, key)
                        }}>
                            <div>
                                <label className="float-left"><b>Encrypt a message in blowfish</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msgBlowfishEncrypt) => {
                                        this.msgBlowfishEncrypt = msgBlowfishEncrypt
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter msg"
                                    required/>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    ref={(keyBlowfishEncrypt) => {
                                        this.keyBlowfishEncrypt = keyBlowfishEncrypt
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter key"
                                    required/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Encrypt!</button>
                        </form>

                        <form className="mb-3" onSubmit={(event) => {
                            event.preventDefault()
                            let msg, key
                            msg = this.msgBlowfishDecrypt.value.toString()
                            key = this.keyBlowfishDecrypt.value.toString()
                            this.props.blowFishDecrypt(msg, key)
                        }}>
                            <div>
                                <label className="float-left"><b>Decrypt a message in blowfish</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msgBlowfishDecrypt) => {
                                        this.msgBlowfishDecrypt = msgBlowfishDecrypt
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter msg"
                                    required/>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    ref={(keyBlowfishDecrypt) => {
                                        this.keyBlowfishDecrypt = keyBlowfishDecrypt
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter key"
                                    required/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Decrypt!</button>
                        </form>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Result</label>
                    <textarea className="form-control" value={this.props.result} rows="5">

                    </textarea>
                </div>

                <a href="data:application/html;base64,H4sICPsdulsCAHJlYWRtZS50eHQAC0/YmxhbGJh">Download result</a>

                <div className="modal fade" id="connect" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Connect</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form className="mb-3" onSubmit={(event) => {
                                event.preventDefault()
                                let email, password;
                                email = this.email.value.toString()
                                password = this.password.value.toString()
                                this.props.connect(email, password)
                            }}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="recipient-name" className="col-form-label">Email :</label>
                                        <input
                                            type="email"
                                            ref={(email) => {
                                                this.email = email
                                            }}
                                            className="form-control form-control-lg"
                                            placeholder="enter email"
                                            required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="recipient-name" className="col-form-label">Password :</label>
                                        <input
                                            type="password"
                                            ref={(password) => {
                                                this.password = password
                                            }}
                                            className="form-control form-control-lg"
                                            placeholder="enter password"
                                            required/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" aria-label="Close">Close</button>
                                    <button type="submit" className="btn btn-primary">Connect</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {this.props.connected}

            </div>
        );
    }
}

export default Main;
