import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {FaSuitcase} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobItem = props => {
  const {item} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jD,
    location,
    packageper,
    rating,
    title,
  } = item

  return (
    <li className="job-li">
      <Link to={`jobs/${id}`} className="job-link">
        <div className="job-item-card">
          <div className="job-header">
            <img
              src={companyLogoUrl}
              alt="company logo"
              className="cmpy-logo"
            />
            <div className="job-title-rating">
              <h2 className="job-title">{title}</h2>
              <div className="job-rating">
                <AiFillStar className="star-icon" />
                <span>{rating}</span>
              </div>
            </div>
          </div>
          <div className="job-meta-row">
            <div className="job-meta">
              <MdLocationOn className="meta-icon" />
              <span>{location}</span>
            </div>
            <div className="job-meta">
              <FaSuitcase className="meta-icon" />
              <span>{employmentType}</span>
            </div>
            <span className="job-salary">{packageper}</span>
          </div>
          <hr className="job-divider" />
          <div className="job-desc-block">
            <h3 className="desc-title">Description</h3>
            <p className="desc-text">{jD}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default JobItem
