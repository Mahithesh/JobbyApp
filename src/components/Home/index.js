import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = props => {
  const goToJobs = () => {
    const {history} = props
    history.push('/jobs')
  }

  return (
    <div className="home">
      <Header />
      <div className="page">
        <h1>Find The Job That Fits Your Life</h1>
        <p>
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <button className="f-btn btn" type="button" onClick={goToJobs}>
          <Link to="/jobs">Find Jobs</Link>
        </button>
      </div>
    </div>
  )
}

export default Home
