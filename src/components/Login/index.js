import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
  }

  submitMe = async eve => {
    eve.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const reponse = await fetch('https://apis.ccbp.in/login', options)
    const data = await reponse.json()
    if (reponse.ok) {
      const {history} = this.props
      console.log(data)
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      this.setState({isError: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, isError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-page">
        <div className="login-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="web-logo"
          />
          <form onSubmit={this.submitMe}>
            <div className="input">
              <label htmlFor="username">USERNAME</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="inputField"
                onChange={event => {
                  this.setState({username: event.target.value})
                }}
                value={username}
              />
            </div>
            <div className="input">
              <label htmlFor="pass">PASSWORD</label>
              <input
                id="pass"
                type="password"
                placeholder="Password"
                className="inputField"
                value={password}
                onChange={event => {
                  this.setState({password: event.target.value})
                }}
              />
            </div>
            <button className="loginBtn" type="submit">
              Login
            </button>
          </form>
          {isError ? <p className="eorro">*{errorMsg}</p> : null}
        </div>
      </div>
    )
  }
}

export default Login
