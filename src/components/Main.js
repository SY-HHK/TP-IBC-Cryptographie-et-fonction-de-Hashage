import React, {Component} from 'react'

class Main extends Component {

    render() {
        return (
            <div id="content" className="mt-3">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                           role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                           role="tab" aria-controls="pills-profile" aria-selected="false">MD5</a>
                    </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                         aria-labelledby="pills-home-tab">Welcome to crypto tp
                    </div>

                    <div className="tab-pane fade" id="pills-profile" role="tabpanel"
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


                </div>
            </div>
        );
    }
}

export default Main;
