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
    <div className="container">
      <div>
        <img className="logo" src={`${process.env.PUBLIC_URL}/images/logo.gif`} alt=""/>

        <form onSubmit={submit}>
          <div id="page-wrap">
            <div>
              Email:
              <input
                id="email"
                name="email"
                type="text"
                required
                ref={input => _email = input}/>
            </div>
            <div>
              Password:
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                required
                ref={input => _password = input}/>
            </div>

            <div>
              <button type="submit">Login</button>
            </div>
          </div>
        </form>

        <div id="bg">
          <img
            src={`${process.env.PUBLIC_URL}/images/backdrops/login-backdrop.jpg`}
            alt=""/>
        </div>
      </div>
    </div>
  )
}

export default login;
