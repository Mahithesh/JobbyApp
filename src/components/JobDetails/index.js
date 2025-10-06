import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import JobDetailItem from './JobDetailItem'
import SimilarJobs from './SimilarJobs'

import './index.css'

const apiStatusCons = {
  initial: '',
  succ: 'success',
  failure: 'failure',
  loading: 'loading',
}

class JobDetails extends Component {
  state = {
    apiStatus: apiStatusCons.initial,
    jData: {},
    similarJbs: [],
  }

  componentDidMount() {
    this.getJobDetails()
  }

  getJobDetails = async () => {
    this.setState({apiStatus: apiStatusCons.loading})

    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(match)

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs/${id}`
    const reps = await fetch(url, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })

    if (reps.ok) {
      const jsonData = await reps.json()
      console.log(jsonData)

      const vD = jsonData.job_details

      this.setState({
        apiStatus: apiStatusCons.succ,
        jData: {
          companyLogoUrl: vD.company_logo_url,
          companyWebsiteUrl: vD.company_website_url,
          employmentType: vD.employment_type,
          id: vD.id,
          jobDescription: vD.job_description,
          lifeAtCompany: {
            description: vD.life_at_company.description,
            imageUrl: vD.life_at_company.image_url,
          },
          location: vD.location,
          packagePerAnnum: vD.package_per_annum,
          rating: vD.rating,
          skills: vD.skills.map(skill => ({
            name: skill.name,
            imageUrl: skill.image_url,
          })),
          title: vD.title,
        },
        similarJbs: jsonData.similar_jobs.map(job => ({
          id: job.id,
          title: job.title,
          companyLogoUrl: job.company_logo_url,
          location: job.location,
          employmentType: job.employment_type,
          jobDescription: job.job_description,
          rating: job.rating,
        })),
      })
    } else {
      this.setState({apiStatus: apiStatusCons.failure})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ff0000" height="50" width="50" />
    </div>
  )

  renderJob = () => {
    const {apiStatus, jData, similarJbs} = this.state
    switch (apiStatus) {
      case apiStatusCons.loading:
        return this.renderLoader()
      case apiStatusCons.succ:
        return (
          <>
            <JobDetailItem jd={jData} />
            <h1>Similar Jobs</h1>
            <ul className="similar-jobs-list">
              {similarJbs.map(sjs => (
                <SimilarJobs key={sjs.id} item={sjs} />
              ))}
            </ul>
          </>
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
            <button type="button" onClick={() => this.getJobDetails()}>
              Retry
            </button>
          </div>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="jobDetailsPage">{this.renderJob()}</div>
      </div>
    )
  }
}

export default JobDetails
