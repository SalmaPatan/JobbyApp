import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading"> Find The Job That Fits Your Life </h1>
        <p className="home-description">
          Millions of people are searching for jobs, salary information, company
          reviews.Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button type="button" className="jobs-button">
            Find Jobs
          </button>
        </Link>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)
export default Home
