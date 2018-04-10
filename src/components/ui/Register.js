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
    <div>
      <form onSubmit={submit}>
        <div id="page-wrap">
          <div >
            <div className="row">
              <div className="col-6">
                Email:
              </div>
              <div className="col-6">
                <input
                  id="email"
                  name="email"
                  type="text"
                  required 
                  ref={input => _email = input}/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                Password:
              </div>
              <div className="col">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  ref={input => _password = input}/>
              </div>
            </div>

            <div className="row">
              <div className="col">
                Confirm Password:
              </div>
              <div className="col">
                <input
                  id="comfirmPassword"
                  name="comfirmPassword"
                  type="password"
                  required
                  ref={input => _comfirmPassword = input}/>
              </div>

            </div>

          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Register;