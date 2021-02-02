import React, {Component} from 'react'

class Main extends Component {

    render() {
        return (
            <div id="content" className="mt-3">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#home"
                           role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                    </li>
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
                </ul>

                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel"
                         aria-labelledby="pills-home-tab">Welcome to crypto tp
                    </div>

                    <div className="tab-pane fade" id="md5" role="tabpanel"
                         aria-labelledby="pills-profile-tab">
                        <form className="mb-3" onSubmit={(event) => {
                            event.preventDefault()
                            let msg
                            msg = this.msg.value.toString()
                            this.props.md5(msg)
                        }}>
                            <div>
                                <label className="float-left"><b>Hash a message in md5</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msg) => {
                                        this.msg = msg
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
                            msg = this.msg.value.toString()
                            this.props.sha2(msg)
                        }}>
                            <div>
                                <label className="float-left"><b>Hash a message in SHA2-256</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msg) => {
                                        this.msg = msg
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
                            msg = this.msg.value.toString()
                            this.props.sha3(msg)
                        }}>
                            <div>
                                <label className="float-left"><b>Hash a message in SHA3-512</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msg) => {
                                        this.msg = msg
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
                            msg = this.msg.value.toString()
                            this.props.keccak(msg)
                        }}>
                            <div>
                                <label className="float-left"><b>Hash a message in Keccak-512</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msg) => {
                                        this.msg = msg
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
                            msg = this.msg.value.toString()
                            this.props.ripemd(msg)
                        }}>
                            <div>
                                <label className="float-left"><b>Hash a message in RipeMD160</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msg) => {
                                        this.msg = msg
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
                            msg = this.msg.value.toString()
                            key = this.key.value.toString()
                            this.props.aes(msg, key)
                        }}>
                            <div>
                                <label className="float-left"><b>Encrypt a message in AES</b></label>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(msg) => {
                                        this.msg = msg
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter msg"
                                    required/>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(key) => {
                                        this.key = key
                                    }}
                                    className="form-control form-control-lg"
                                    placeholder="enter key"
                                    required/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Encrypt!</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
