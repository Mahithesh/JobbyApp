const JobDetailItem = props => {
  const {jd} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    lifeAtCompany,
    location,
    skills,
    packagePerAnnum,
    rating,
    title,
    companyWebsiteUrl,
  } = jd
  const {description, imageUrl} = lifeAtCompany
  return (
    <div className="jobdetail-item">
      <div className="cmpy-logo-rating-con-2">
        <img
          src={companyLogoUrl}
          alt="job details company logo"
          className="cmpy-logo"
        />
        <div className="rating-title-202">
          <h1>{title}</h1>
          <p
            style={{
              color: '#fbbf24',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <span style={{fontSize: '1.2rem', marginRight: 4}}>★</span>
            {rating}
          </p>
        </div>
      </div>
      <div className="loc-sal-type-con" style={{marginBottom: 0}}>
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <span role="img" aria-label="location" style={{fontSize: '1.1rem'}}>
            📍
          </span>
          {location}
        </p>
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <span role="img" aria-label="bag" style={{fontSize: '1.1rem'}}>
            💼
          </span>
          {employmentType}
        </p>
        <p
          className="package"
          style={{
            marginLeft: 'auto',
            fontWeight: 700,
            fontSize: '1.25rem',
            color: '#fff',
          }}
        >
          {packagePerAnnum}
        </p>
      </div>
      <hr
        style={{
          border: 'none',
          borderTop: '1px solid #6b7280',
          margin: '8px 0 0 0',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 18,
        }}
      >
        <h1 style={{margin: 0}}>Description</h1>
        <a
          className="visit"
          href={companyWebsiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#b3baf7',
            fontWeight: 500,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          Visit <span style={{fontSize: '1.1em'}}>↗</span>
        </a>
      </div>
      <p>{jobDescription}</p>
      <h1 style={{marginTop: 28}}>Skills</h1>
      <ul>
        {skills.map(i => (
          <li className="skill-item" key={i.name}>
            <img src={i.imageUrl} alt={i.name} className="skill-img" />
            <p>{i.name}</p>
          </li>
        ))}
      </ul>
      <h1 style={{marginTop: 28}}>Life at Company</h1>
      <div className="life-company-section">
        <p>{description}</p>
        <img src={imageUrl} alt="life at company" />
      </div>
    </div>
  )
}

export default JobDetailItem
