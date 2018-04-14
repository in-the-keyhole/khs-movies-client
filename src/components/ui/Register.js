import React from 'react'

const Register = ({
  register = f => f
}) => {

  let _email,
    _password,
    _comfirmPassword

  const submit = e => {
    e.preventDefault()
    register(_email.value, _password.value, _comfirmPassword.value)
  }

  return (

    <form onSubmit={submit}>
      <div id='marker'>

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
                  size="30"
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
              <div className="col-sm-6">
                <input
                  id="password"
                  name="password"
                  type="password"
                  size="30"
                  required
                  ref={input => _password = input}/>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-3">

                <label>
                  Confirm Password:
                </label>
              </div>
              <div className="col-sm-6">
                <input
                  id="comfirmPassword"
                  name="comfirmPassword"
                  type="password"
                  size="30"
                  required
                  ref={input => _comfirmPassword = input}/>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-9">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

  )
}

export default Register;