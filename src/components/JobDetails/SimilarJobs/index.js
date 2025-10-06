const SimilarJobs = props => {
  const {item} = props
  const {
    title,
    companyLogoUrl,
    location,
    employmentType,
    jobDescription,
    rating,
  } = item
  return (
    <li className="job-li">
      <div className="job-item">
        <div className="cmpy-logo-rating-con-1">
          <img
            src={companyLogoUrl}
            alt="similar job company logo"
            className="cmpy-logo"
          />
          <div className="rating-title-1">
            <h1>{title}</h1>
            <p>{rating}</p>
          </div>
        </div>
        <h1 className="dis">Description</h1>
        <p>{jobDescription}</p>
        <div className="loc-sal-type-con-1">
          <p>{location}</p>
          <p>{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs
