import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div>
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-bar-mobile-logo-container">
            <Link to="/">
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
                alt="website logo"
              />
            </Link>
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </Link>
            <Link to="/jobs" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </Link>
            <button type="button" className="nav-mobile-btn">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                alt="nav logout"
                className="nav-bar-image"
                onClick={onClickLogout}
              />
            </button>
          </div>
          <div className="nav-bar-large-container">
            <div>
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
                alt="website logo"
              />
            </div>
            <div>
              <ul className="nav-menu">
                <li className="nav-menu-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-menu-item">
                  <Link to="/jobs" className="nav-link">
                    Jobs
                  </Link>
                </li>
              </ul>
            </div>
            <li className="button">
              <button
                type="button"
                className="logout-desktop-btn"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </li>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default withRouter(Header)
