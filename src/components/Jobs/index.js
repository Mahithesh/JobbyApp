import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import Profile from './Profile'
import Filters from './Filters'
import JobItem from './JobItem'

import './index.css'

const apiStatusCons = {
  initial: '',
  succ: 'success',
  failure: 'failure',
  loading: 'loading',
  noData: 'nodata',
}

class Jobs extends Component {
  state = {
    proStatus: apiStatusCons.initial,
    jbstatus: apiStatusCons.initial,
    profileData: {},
    jobsData: [],
    salary: '',
    typeofEmp: [],
    searchQu: '',
  }

  componentDidMount() {
    this.getProfile()
    this.getJobs()
  }

  getProfile = async () => {
    this.setState({proStatus: apiStatusCons.loading})
    const jwtToken = Cookies.get('jwt_token')
    const resp1 = await fetch('https://apis.ccbp.in/profile', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    if (resp1.ok) {
      const data = await resp1.json()
      console.log(data)
      const profileDetails = data.profile_details
      this.setState({
        proStatus: apiStatusCons.succ,
        profileData: {
          name: profileDetails.name,
          avatar: profileDetails.profile_image_url,
          bio: profileDetails.short_bio,
        },
      })
    } else {
      this.setState({proStatus: apiStatusCons.failure})
    }
  }

  getJobs = async () => {
    this.setState({jbstatus: apiStatusCons.loading})
    const {typeofEmp, salary, searchQu} = this.state
    const joins = typeofEmp.join(',')
    const url = `https://apis.ccbp.in/jobs?employment_type=${joins}&minimum_package=${salary}&search=${searchQu}`
    const jwtToken = Cookies.get('jwt_token')
    const resp1 = await fetch(url, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    if (resp1.ok) {
      const data = await resp1.json()
      console.log(data)
      const {jobs} = data
      if (jobs.length !== 0) {
        this.setState({
          jbstatus: apiStatusCons.succ,
          jobsData: jobs.map(i => ({
            companyLogoUrl: i.company_logo_url,
            employmentType: i.employment_type,
            id: i.id,
            jD: i.job_description,
            location: i.location,
            packageper: i.package_per_annum,
            rating: i.rating,
            title: i.title,
          })),
        })
      } else {
        this.setState({jbstatus: apiStatusCons.noData})
      }
    } else {
      this.setState({jbstatus: apiStatusCons.failure})
    }
  }

  typeOfEmployee = id => {
    const {typeofEmp} = this.state
    this.setState(
      {
        typeofEmp: typeofEmp.includes(id)
          ? typeofEmp.filter(i => i !== id)
          : [...typeofEmp, id],
      },
      this.getJobs,
    )
  }

  salarySelection = num => {
    this.setState({salary: num}, this.getJobs)
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ff0000" height="50" width="50" />
    </div>
  )

  renderProfile = () => {
    const {proStatus, profileData} = this.state
    switch (proStatus) {
      case apiStatusCons.loading:
        return this.renderLoader()
      case apiStatusCons.succ:
        return <Profile user={profileData} />
      case apiStatusCons.failure:
        return (
          <div className="progile-Retry-con">
            <button type="button" onClick={() => this.getProfile()}>
              Retry
            </button>
          </div>
        )
      default:
        return null
    }
  }

  renderJobs = () => {
    const {jbstatus, jobsData} = this.state
    switch (jbstatus) {
      case apiStatusCons.loading:
        return <div className="load">{this.renderLoader()}</div>
      case apiStatusCons.succ:
        return (
          <ul className="jobitems">
            {jobsData.map(i => (
              <JobItem key={i.id} item={i} />
            ))}
          </ul>
        )
      case apiStatusCons.noData:
        return (
          <div className="no-jobs-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
              alt="no jobs"
              className="no-jobs-img"
            />
            <h1>No Jobs Found</h1>
            <p>We could not find any jobs. Try other filters.</p>
          </div>
        )
      case apiStatusCons.failure:
        return (
          <div className="jobs-failure-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
              alt="failure view"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>We cannot seem to find the page you are looking for.</p>
            <button type="button" onClick={() => this.getJobs()}>
              Retry
            </button>
          </div>
        )
      default:
        return null
    }
  }

  render() {
    const {searchQu} = this.state
    return (
      <div>
        <Header />
        <div className="jobs-page">
          <div className="section-a">
            {this.renderProfile()}
            <Filters emp={this.typeOfEmployee} sal={this.salarySelection} />
          </div>
          <div className="section-b">
            <div className="searchBar">
              <input
                type="search"
                placeholder="Search"
                value={searchQu}
                onChange={eve => {
                  this.setState({searchQu: eve.target.value})
                }}
                onKeyDown={eve => {
                  if (eve.key === 'Enter') {
                    this.getJobs()
                  }
                  console.log(eve.key)
                }}
              />
              <button
                type="button"
                onClick={() => this.getJobs()}
                data-testid="searchButton"
              >
                <BsSearch className="search-icon" />
              </button>
            </div>
            {this.renderJobs()}
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
