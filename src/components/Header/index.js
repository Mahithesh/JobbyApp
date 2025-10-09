import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useState} from 'react'
import './index.css'

const Header = props => {
  const {history} = props
  const [menuOpen, setMenuOpen] = useState(false)
  const logMeout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav>
      <div className="header-row">
        <Link to="/" className="web" onClick={closeMenu}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="web-logo"
          />
        </Link>
        <button
          className="hamburger"
          type="button"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="bar">.</span>
          <span className="bar">.</span>
          <span className="bar">.</span>
        </button>
      </div>
      <ul className={`nav-items${menuOpen ? ' open' : ''}`}>
        <li>
          <Link className="link" to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/jobs" onClick={closeMenu}>
            Jobs
          </Link>
        </li>
        <li className="logout-mobile">
          <button
            type="button"
            className="btn"
            onClick={() => {
              logMeout()
              closeMenu()
            }}
          >
            Logout
          </button>
        </li>
      </ul>
      <button type="button" className="btn logout-desktop" onClick={logMeout}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
