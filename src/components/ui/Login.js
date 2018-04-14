import React from 'react'

const login = ({
    login = f => f
}) => {

    let _email,
        _password;

    const submit = e => {
        e.preventDefault()
        login(_email.value, _password.value)
    }

    return (

        <form onSubmit={submit}>

            <div id="marker">
                <div className="row">
                    <div className="col-sm-2">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/keyholelogo.png`}
                            alt="keyhole logo"/>
                    </div>
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-3">
                                <label >
                                    Email:
                                </label>
                            </div>
                            <div className="col-sm-6">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    required
                                    ref={input => _email = input}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-3">
                                <label >
                                    Password:
                                </label>
                            </div>

                            <div className="col-sm-3">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    required
                                    ref={input => _password = input}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-9">
                                <button type="submit">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default login;
