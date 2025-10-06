import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const {history} = props
  const logMeout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav>
      <ul className="nav-items">
        <li className="web">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="web-logo"
            />
          </Link>
        </li>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/jobs">
            Jobs
          </Link>
        </li>
      </ul>
      <button type="button" className="btn" onClick={logMeout}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
